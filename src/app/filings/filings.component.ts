import { Component, OnInit } from '@angular/core';
import * as Papa from 'papaparse'

import { FilingsService } from '../shared/services/filings.service';

declare var swal:any;

class Filing {
  parcel:string;
  keyword:string;
  status:number;
  docType:string;
  beginDate:Date;
  finishDate:Date;
}

@Component({
  selector: 'app-filings',
  templateUrl: './filings.component.html',
  styleUrls: ['./filings.component.scss']
})
export class FilingsComponent implements OnInit {
  data: Array<any>;
  dataList : Array<any>;
  filing: Filing;

  constructor(private _filingService: FilingsService) { }

  ngOnInit(){
    this.data = new Array<any>();
    this.dataList = new Array<any>();
    this.filing = new Filing();
  }

  reset(){
    this.filing = new Filing();
    this.dataList = this.data;
  }
  
  search(){
    let ed = new Date(this.filing.finishDate).getTime();
    let sd = new Date(this.filing.beginDate).getTime();
    this.dataList = this.data.filter(i => { 
      var time = new Date(i.RecordDate).getTime();
      return i.ParcelNumber.indexOf(this.filing.parcel ? this.filing.parcel.toLowerCase() : "") >= 0 && 
        i.DocTypeDescription.toLowerCase().indexOf(this.filing.docType ? this.filing.docType.toLowerCase() : "") >=0 &&
        this.filing.finishDate && this.filing.finishDate ? (sd < time && time < ed) : true;
    })
  }

  dateChanged(e:any, name){
    this.filing[name] = e.target.value;
  }

  onChange(files: File[]){
    swal.fire("Please wait...")
    swal.showLoading();
    if(files[0]){
      Papa.parse(files[0], {
        worker: true,
        header: true,
        skipEmptyLines: true,
        step: (result, file) => {
          this.dataList.push(result.data);
        },
        complete : () => {
          this.dataList = this.dataList.slice(1);
          this.data = this.dataList.slice(1);
          swal.close()
        }
      });
    }
  }

  saveDb(){
    swal.fire("Please wait...")
    swal.showLoading();
    this._filingService.export(this.dataList).subscribe((result:any) => {
      if(result.success){
        swal.fire("Success!","The operation was successful", "success");
      } else {
        swal.fire("Error", "There was an error while exporting the data", "error")
      }
    }, error => {
      swal.fire("Error", "There was an error while exporting the data", "error")
    })
  }

}
