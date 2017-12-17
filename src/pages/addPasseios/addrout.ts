import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController,Alert } from 'ionic-angular';
import { Roteiro } from '../../models/roteiro';
import { Destino } from '../../models/destino';
import { ListaroutPage } from '../listaPasseios/listarout';
import { LocalStorageService } from 'angular-2-local-storage';
import { ListPage } from '../listaViagens/list';
import { DatePicker } from '@ionic-native/date-picker';

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
   public destino;
   public formataDataIncio;
   public   formataDataFim ;
   public dia_inicio;
   public dia_fim;
   public mes_inicio;
   public mes_fim;
  constructor(public navCtrl: NavController, public navParams: NavParams, private localStorageService: LocalStorageService,private  datePicker:  DatePicker,private alertCtrl: AlertController) {

    if(this.navParams.get('infoRoteiro')!= null){
      this.destino =  this.navParams.get('destinoSelecionado');
      this.roteiro =  this.navParams.get('infoRoteiro');
      }else{
    this.destino =  this.navParams.get('destinoSelecionado');
    this.roteiro = new Roteiro(new Date().getTime(),"ios-pin","","","");
}

  }

  ionViewDidLoad() {

this.formataDataIncio = this.destino.data_inicio;
this.formataDataFim = this.destino.data_final;
console.log("Data Inicio:" + this.formataDataIncio +"Data Fim:" + this.formataDataFim);

  }




  saverout(){

    if(!this.roteiro.local  || !this.roteiro.data || !this.roteiro.hora){
    
  let alert = this.alertCtrl.create({
          title:'Aviso',
          message: "Por favor, preencha corretamente todos os campos",
          buttons:[{text:'Ok'}]

        });
    alert.present();
    return
  }


this.roteiros = [];
this.roteiro.data = this.roteiro.data ;


        if (this.localStorageService.get(this.destino.id) != null)
        {
            let jsonObjectArray = JSON.parse(<string>this.localStorageService.get(this.destino.id));
            for (let jsonObject of jsonObjectArray)
            {
              if(jsonObject.id == this.roteiro.id){
                jsonObject.local=this.roteiro.local;
                jsonObject.hora=this.roteiro.hora;
                jsonObject.data=this.roteiro.data;
              }

              this.roteiros.push(new Roteiro(jsonObject.id, jsonObject.icone, jsonObject.local,jsonObject.hora, jsonObject.data));
            }
        }else{

        }
      if(this.navParams.get('infoRoteiro')== null){
        this.roteiros.push(this.roteiro);
      }

        this.localStorageService.set(this.destino.id, JSON.stringify(this.roteiros));
        this.navCtrl.pop();
  }

  selecionaDataPasseio(){

    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      allowFutureDates:true,
      allowOldDates:false,
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT,


    }).then(
      date =>{
         this.roteiro.data = date.toISOString();
      },
       err => console.log('Error occurred while getting date: ', err)
    );

  }

  selecionaHoraPasseio(){
    this.datePicker.show({
      date: new Date(),
      mode: 'time',
      allowFutureDates:true,
      allowOldDates:false,
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT,


    }).then(
      date =>{
         this.roteiro.data = date.toISOString();
      },
       err => console.log('Error occurred while getting date: ', err)
    );



  }

}
