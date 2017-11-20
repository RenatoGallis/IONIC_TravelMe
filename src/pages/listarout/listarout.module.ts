import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaroutPage } from './listarout';

@NgModule({
  declarations: [
    ListaroutPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaroutPage),
  ],
})
export class ListaroutPageModule {}
