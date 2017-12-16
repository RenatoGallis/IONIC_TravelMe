import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Destino } from '../../models/destino';
import { AddPage } from '../addViagem/add';
import { ListaroutPage } from '../listaPasseios/listarout';
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
                  this.destinos.push(new Destino(jsonObject.id, jsonObject.icone, jsonObject.nome, jsonObject.data_inicio,jsonObject.data_final));
                }
            }

  }


  add() {
    this.navCtrl.push(AddPage);
  }

listaroteiro(destino) {
    this.navCtrl.push(ListaroutPage,{destinoSelecionado: destino});
  }


  del(id){
  for (var i=0; i < this.destinos.length; i++)
  {
    if (this.destinos[i].id == id)
    {
      this.destinos.splice(i, 1);
    }
  }
      this.localStorageService.set("destinos", JSON.stringify(this.destinos));

}

alterar(destino){
console.log(destino.nome);
//this.navCtrl.push(EditarViagemPage,{idViagem: destino.id,nomeViagem: destino.nome,dataInicioViagem: destino.data_inicio, dataFimViagem: destino.data_final});
this.navCtrl.push(AddPage,{infoDestino: destino});
}



}
