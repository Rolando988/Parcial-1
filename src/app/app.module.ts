import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Parcial1Component } from './parcial1/parcial1.component';
import {FormsModule}from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    Parcial1Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
