import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Testcomp1Component } from './testcomp1/testcomp1.component';
import { Testcomp2Component } from './testcomp2/testcomp2.component';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    Testcomp1Component,
    Testcomp2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
