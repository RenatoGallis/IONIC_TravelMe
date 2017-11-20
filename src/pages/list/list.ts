import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Destino } from '../../models/destino';
import { AddPage } from '../add/add';
import { ListaroutPage } from '../listarout/listarout';
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
    destinos : Destino[];
  //items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams , private localStorageService: LocalStorageService) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    this.destinos = [];
            if (this.localStorageService.get("destinos") != null)
            {
                let jsonObjectArray = JSON.parse(<string>this.localStorageService.get("destinos"));
                for (let jsonObject of jsonObjectArray)
                {
                  //jsonObject.icone = "ios-plane";
                  this.destinos.push(new Destino(jsonObject.id, jsonObject.icone, jsonObject.nome, new Date(jsonObject.data_inicio),new Date(jsonObject.data_final)));
                }
            }

  }


  add() {
    this.navCtrl.push(AddPage);
  }

listaroteiro() {
    this.navCtrl.push(ListaroutPage);
  }


  del(id){
  for (var i=0; i < this.destinos.length; i++)
  {
    if (this.destinos[i].id == id)
    {
      this.destinos.splice(i, 1);
    }
  }
      this.localStorageService.set("destino", JSON.stringify(this.destinos));
}



}
