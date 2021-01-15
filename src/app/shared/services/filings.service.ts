import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Service } from './Service';

@Injectable({
  providedIn: 'root'
})

export class FilingsService extends Service {

  constructor(private _http: HttpClient) {
    super();
  }

  export(data:any){
    return this._http.post(this.getApiRoute('/filings'), data, this.headers);
  }
}
