import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SecondBookingPage } from './second-booking';

@NgModule({
  declarations: [
    SecondBookingPage,
  ],
  imports: [
    IonicPageModule.forChild(SecondBookingPage),
  ],
})
export class SecondBookingPageModule {}
