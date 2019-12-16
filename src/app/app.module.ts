import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FirstModulesModule } from './modules/first-module.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FirstModulesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
