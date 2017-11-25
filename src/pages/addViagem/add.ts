import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Destino } from '../../models/destino';
import { ListPage } from '../listaViagens/list';

import { LocalStorageService } from 'angular-2-local-storage';

/**
 * Generated class for the AddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {
   destino: Destino;
    destinos: Destino[];

  constructor(public navCtrl: NavController, public navParams: NavParams , private localStorageService: LocalStorageService) {
    this.destino = new Destino(new Date().getTime(),"ios-plane","",new Date(), new Date());
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPage');
  }

  save() {
  this.destinos = [];
  this.destino.data_inicio = new Date(this.destino.data_inicio +"T12:00:00-03:00");
  this.destino.data_final = new Date(this.destino.data_final +"T13:00:00-03:00");

      if (this.localStorageService.get("destinos") != null)
      {
          let jsonObjectArray = JSON.parse(<string>this.localStorageService.get("destinos"));
          for (let jsonObject of jsonObjectArray)
          {
            this.destinos.push(new Destino(jsonObject.id, jsonObject.icone, jsonObject.nome, new Date(jsonObject.data_inicio), new Date(jsonObject.data_final)));
            console.log("teste data:" + jsonObject.data_final);
          }
      }

      this.destinos.push(this.destino);
this.localStorageService.set("destinos", JSON.stringify(this.destinos));

this.navCtrl.setRoot(ListPage);
}

}
