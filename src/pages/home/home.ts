import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddPage } from  '../addViagem/add';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  start(){
    this.navCtrl.push(AddPage);
  }

}
