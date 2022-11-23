// /*
// * File: app.module.ts
// * Author: Kovács Dorina
// * Copyright: 2022, Kovács Dorina
// * Group: Szoft II/N
// * Date: 2022-11-23
// * Github: https://github.com/Kdorina
// * Licenc: GNU GPL
// */

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
