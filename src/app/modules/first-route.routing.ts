import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirstComponent } from './first-component/first-component.component';

const routes: Routes = [
  {path: '', redirectTo: 'first-component', pathMatch: 'full'},
  {path: 'first-component', component: FirstComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirstModulesRoutingModule { }
