import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirstComponentComponent } from './first-component/first-component.component';

const routes: Routes = [
  {path: '', redirectTo: '/first-component', pathMatch: 'full'},
  {path: '/first-component', component: FirstComponentComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirstModulesRoutingModule { }
