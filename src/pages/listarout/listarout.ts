import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddroutPage } from '../addrout/addrout';
import { Destino } from '../../models/destino';
import { Roteiro } from '../../models/roteiro';
import { LocalStorageService } from 'angular-2-local-storage';

/**
 * Generated class for the ListaroutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listarout',
  templateUrl: 'listarout.html',
})
export class ListaroutPage {

  public destinoId;
  public   roteiros : Roteiro[];
  constructor(public navCtrl: NavController, public navParams: NavParams, private localStorageService: LocalStorageService) {
    this.destinoId =  this.navParams.get('destinoSelecionado');

    this.roteiros = [];
            if (this.localStorageService.get(this.destinoId) != null)
            {
                let jsonObjectArray = JSON.parse(<string>this.localStorageService.get(this.destinoId));
                for (let jsonObject of jsonObjectArray)
                {

                  this.roteiros.push(new Roteiro(jsonObject.id, jsonObject.icone, jsonObject.local,jsonObject.hora, new Date(jsonObject.data)));
                }
            }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaroutPage');
  }

  add(){
        this.navCtrl.push(AddroutPage, {destinoSelecionado: this.destinoId});
        console.log("Dentro do metodo add" + this.destinoId);
        }

}
