import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstModulesRoutingModule } from './first-route.routing';

import { FirstComponent } from './first-component/first-component.component';

@NgModule({
  declarations: [
    FirstComponent
  ],
  imports: [
    CommonModule,
    FirstModulesRoutingModule
  ],
  exports: [
    FirstComponent
  ]
})
export class FirstModulesModule { }
