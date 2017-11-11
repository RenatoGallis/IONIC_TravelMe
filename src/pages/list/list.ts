import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Destino } from '../../models/destino';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
    destinos : Destino[];
  //items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.destinos = [new Destino(1,  "ios-plane", "Roma", new Date("2016-10-01T03:00:00-03:00"),new Date("2016-10-01T03:00:00-03:00")),
                        new Destino(2,  "ios-plane", "Jalapao", new Date("2016-11-01T03:00:00-03:00"),new Date("2016-11-01T03:00:00-03:00")),
                        new Destino(3,  "ios-plane", "Japão", new Date("2016-10-20T03:00:00-03:00"),new Date("2016-10-20T03:00:00-03:00"))];
  }
}
