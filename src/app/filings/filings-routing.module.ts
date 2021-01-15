import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilingsComponent } from './filings.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Filings Page',
      urls: [
        { title: 'Filings', url: '/index' },
      ]
    },
    
    component: FilingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilingsRoutingModule { }
