import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController,Alert } from 'ionic-angular';
import { Destino } from '../../models/destino';
import { ListPage } from '../listaViagens/list';
import { DatePicker } from '@ionic-native/date-picker';
import { LocalStorageService } from 'angular-2-local-storage';
import { Vibration } from '@ionic-native/vibration';

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


  constructor(public navCtrl: NavController, public navParams: NavParams , private localStorageService: LocalStorageService,private  datePicker:  DatePicker, private alertCtrl: AlertController,private vibration: Vibration) {
if(this.navParams.get('infoDestino')!= null){
    this.destino =  this.navParams.get('infoDestino');
  }else{
    this.destino = new Destino(new Date().getTime(),"ios-plane","","", "");
    }
  }

  ionViewDidLoad() {}

  save() {


  this.destinos = [];

  if(!this.destino.nome  || !this.destino.data_inicio || !this.destino.data_final){

  this.vibration.vibrate(500);

let alert = this.alertCtrl.create({
        title:'Aviso',
        message: "Por favor, preencha corretamente todos os campos",
        buttons:[{text:'Ok'}]
      });
  alert.present();
  return
}

if(this.destino.data_final < this.destino.data_inicio){


  this.vibration.vibrate(500);

  let alert_data = this.alertCtrl.create({
          title:'Aviso',
          message: "Data fim menor que a data inicio, por favor corrija",
          buttons:[{text:'Ok'}]
        });
    alert_data.present();
    return
}

      if (this.localStorageService.get("destinos") != null)
      {
          let jsonObjectArray = JSON.parse(<string>this.localStorageService.get("destinos"));
          for (let jsonObject of jsonObjectArray)
          {
            if(jsonObject.id == this.destino.id){
              jsonObject.nome = this.destino.nome;
              jsonObject.data_inicio = this.destino.data_inicio;
              jsonObject.data_final = this.destino.data_final;
            }

            this.destinos.push(new Destino(jsonObject.id, jsonObject.icone, jsonObject.nome, jsonObject.data_inicio, jsonObject.data_final));

          }
      }
      if(this.navParams.get('infoDestino')== null){
      this.destinos.push(this.destino);
      }

this.localStorageService.set("destinos", JSON.stringify(this.destinos));

this.navCtrl.setRoot(ListPage);
}

selecionaDataInicio(){

  this.datePicker.show({
    date: new Date(),
    mode: 'date',
    allowFutureDates:true,
    allowOldDates:false,
    androidTheme: this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT,


  }).then(
    date =>{
       this.destino.data_inicio = date.toISOString();
    },
     err => console.log('Error occurred while getting date: ', err)
  );

}

selecionaDataFim(){

  this.datePicker.show({
    date: new Date(),
    mode: 'date',
    allowFutureDates:true,
    allowOldDates:false,
    androidTheme: this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT,


  }).then(
    date =>{
       this.destino.data_final = date.toISOString();
    },
     err => console.log('Error occurred while getting date: ', err)
  );

}

}
