import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Roteiro } from '../../models/roteiro';
import { ListaroutPage } from '../listarout/listarout';
import { LocalStorageService } from 'angular-2-local-storage';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private localStorageService: LocalStorageService) {
    this.roteiro = new Roteiro(new Date().getTime(),"ios-pin","","",new Date());
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddroutPage');
  }


  saverout(){
    this.roteiros = [];
    this.roteiro.data = new Date(this.roteiro.data +"T12:00:00-03:00");


        if (this.localStorageService.get("roteiros") != null)
        {
            let jsonObjectArray = JSON.parse(<string>this.localStorageService.get("roteiros"));
            for (let jsonObject of jsonObjectArray)
            {
              this.roteiros.push(new Roteiro(jsonObject.id, jsonObject.icone, jsonObject.local,jsonObject.hora, new Date(jsonObject.data)));
              console.log("teste data:" + jsonObject.data_final);
            }
        }

        this.roteiros.push(this.roteiro);
  this.localStorageService.set("roteiros", JSON.stringify(this.roteiros));

  //this.navCtrl.setRoot(ListaroutPage);

  }

}
