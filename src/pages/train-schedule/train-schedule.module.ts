import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrainSchedulePage } from './train-schedule';

@NgModule({
  declarations: [
    TrainSchedulePage,
  ],
  imports: [
    IonicPageModule.forChild(TrainSchedulePage),
  ],
  
})
export class TrainSchedulePageModule {}
