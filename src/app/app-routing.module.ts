import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullComponent } from './layouts/full/full.component';


const routes: Routes = [
  {
    path: '',
    component: FullComponent,
    children : [
      { path: '', redirectTo: '/filings', pathMatch: 'full' },
      {
        path: 'filings',
        loadChildren: () => import('./filings/filings.module').then(m => m.FilingsModule),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
