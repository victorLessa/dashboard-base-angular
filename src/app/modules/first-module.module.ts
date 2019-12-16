import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstModulesRoutingModule } from './first-route.routing';

import { FirstComponentComponent } from './first-component/first-component.component';

@NgModule({
  declarations: [
    FirstComponentComponent
  ],
  imports: [
    CommonModule,
    FirstModulesRoutingModule
  ]
})
export class FirstModulesModule { }
