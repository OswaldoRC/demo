import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

import { FilingsRoutingModule } from './filings-routing.module';
import { FilingsComponent } from './filings.component';


@NgModule({
  declarations: [FilingsComponent],
  imports: [
    CommonModule,
    FilingsRoutingModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    FormsModule
  ]
})
export class FilingsModule { }
