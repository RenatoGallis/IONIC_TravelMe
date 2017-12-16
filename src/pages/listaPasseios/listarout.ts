import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddroutPage } from '../addPasseios/addrout';
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

  public destino;
  public   roteiros : Roteiro[];
  constructor(public navCtrl: NavController, public navParams: NavParams, private localStorageService: LocalStorageService) {

  }

  load(){
    this.destino =  this.navParams.get('destinoSelecionado');
    this.roteiros = [];
    if (this.localStorageService.get(this.destino.id) != null)
     {
         let jsonObjectArray = JSON.parse(<string>this.localStorageService.get(this.destino.id));
         for (let jsonObject of jsonObjectArray)
         {

           this.roteiros.push(new Roteiro(jsonObject.id, jsonObject.icone, jsonObject.local,jsonObject.hora, jsonObject.data));
         }
     }
  }


  ionViewDidLoad() {
  //  this.load();
    console.log('ionViewDidLoad ListaroutPage');
  }

  ionViewWillEnter(){
    this.load();
  }

  add(){
        this.navCtrl.push(AddroutPage, {destinoSelecionado: this.destino});
        console.log("Dentro do metodo add" + this.destino.id);
        }

  deletaPasseio(id){
    for (var i=0; i < this.roteiros.length; i++)
    {
      if (this.roteiros[i].id == id)
      {
        this.roteiros.splice(i, 1);
      }
    }
        this.localStorageService.set(this.destino.id, JSON.stringify(this.roteiros));

  }

  alterar(roteiro){
  console.log(roteiro.local);
  //this.navCtrl.push(EditarViagemPage,{idViagem: destino.id,nomeViagem: destino.nome,dataInicioViagem: destino.data_inicio, dataFimViagem: destino.data_final});
  this.navCtrl.push(AddroutPage,{infoRoteiro: roteiro,destinoSelecionado: this.destino});
  }


}
