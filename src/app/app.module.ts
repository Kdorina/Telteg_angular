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
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
