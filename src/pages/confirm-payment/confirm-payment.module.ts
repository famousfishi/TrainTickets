import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfirmPaymentPage } from './confirm-payment';

@NgModule({
  declarations: [
    ConfirmPaymentPage,
  ],
  imports: [
    IonicPageModule.forChild(ConfirmPaymentPage),
  ],
})
export class ConfirmPaymentPageModule {}
