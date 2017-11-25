import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Roteiro } from '../../models/roteiro';
import { Destino } from '../../models/destino';
import { ListaroutPage } from '../listaPasseios/listarout';
import { LocalStorageService } from 'angular-2-local-storage';
import { ListPage } from '../listaViagens/list';

/**
 * Generated class for the AddroutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addrout',
  templateUrl: 'addrout.html',
})
export class AddroutPage {
  roteiro: Roteiro;
   roteiros: Roteiro[];
   public destinoId;

  constructor(public navCtrl: NavController, public navParams: NavParams, private localStorageService: LocalStorageService) {

    this.destinoId =  this.navParams.get('destinoSelecionado');
    console.log("AddRout:" + this.destinoId);
    this.roteiro = new Roteiro(new Date().getTime(),"ios-pin","","",new Date());


  }

  ionViewDidLoad() {
    console.log('ionVixewDidLoad AddroutPage');

  }




  saverout(){
    this.roteiros = [];
    this.roteiro.data = new Date(this.roteiro.data +"T12:00:00-03:00");


        if (this.localStorageService.get(this.destinoId) != null)
        {
            let jsonObjectArray = JSON.parse(<string>this.localStorageService.get(this.destinoId));
            for (let jsonObject of jsonObjectArray)
            {
              this.roteiros.push(new Roteiro(jsonObject.id, jsonObject.icone, jsonObject.local,jsonObject.hora, new Date(jsonObject.data)));
            }
        }

        this.roteiros.push(this.roteiro);
        this.localStorageService.set(this.destinoId, JSON.stringify(this.roteiros));
        //this.navCtrl.setRoot(ListaroutPage ,{destinoSelecionado: this.destinoId});
        this.navCtrl.pop();
  }

}
