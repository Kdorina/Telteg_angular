// /*
// * File: app.component.ts
// * Author: Kovács Dorina
// * Copyright: 2022, Kovács Dorina
// * Group: Szoft II/N
// * Date: 2022-11-23
// * Github: https://github.com/Kdorina
// * Licenc: GNU GPL
// */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
 

  constructor() {}

  title = 'Telek területszámítás';
  aSide!: number;
  bSide!: number;
  area!: number;
  halfarea!: number;
  showHalfaera!: any;
  showAera!: any;
  about!: any;

  //IMAGE
  path: string = '../assets/images/telek.png';
  alttext: string = 'A kép leírása';

//MODAL
  showModal : any;

  clickModal(){
   this.showModal = true;
  }

  closeBtn(){
  this.showModal = false;
  }

 calc():void{
  this.halfarea = this.aSide*this.bSide;
  this.area = this.halfarea*2;
  this.showHalfaera = true;
  this.showAera = true;
  this.about = true;
 };

 ngOnInit(): void {
    // this.formModal = new window.bootstrap.Modal(
    //   document.getElementById('myModal')
    
  }
  

//  openModal(){
//     // // this.formModal.show();
//     // this.formModal = true;
//     this.modal = true;
   
//   }
//   close(){
//     // this.formModal.hide();
//     this.modal = true;
//   }
}
