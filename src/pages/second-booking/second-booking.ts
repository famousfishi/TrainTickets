import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SecondBookingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-second-booking',
  templateUrl: 'second-booking.html',
})
export class SecondBookingPage {
  schedules: any[] = [];


  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.schedules = [
      {schedule_id: "coach 7am", schedule_name: "7:00 A.M - 8.00 A.M", schedule_type: 'COACH N1,500'},
      {schedule_id: "business 7am", schedule_name: "7:00 A.M - 8.00 A.M", schedule_type: 'BUSINESS N2,500'},
      {schedule_id: "coach 9am", schedule_name: "9:00 A.M - 10.00 A.M", schedule_type: 'COACH N1,500'},
      {schedule_id: "business 9am", schedule_name: "9:00 A.M - 10.00 A.M", schedule_type: 'BUSINESS N2,500'},
      {schedule_id: "coach 11am", schedule_name: "11:00 A.M - 12.00 P.M", schedule_type: 'COACH N1,500'},
      {schedule_id: "flexible 11am", schedule_name: "11:00 A.M - 12.00 P.M", schedule_type: 'FLEXIBLE N2,500'},
      {schedule_id: "standing 11am", schedule_name: "11:00 A.M - 12.00 P.M", schedule_type: 'STANDING N2,500'},
      {schedule_id: "business 11am", schedule_name: "11:00 A.M - 12.00 P.M", schedule_type: 'BUSINESS N2,500'},
      {schedule_id: "coach 2pm", schedule_name: "2:00 P.M - 3.00 P.M", schedule_type: 'COACH N2,500'},
      {schedule_id: "business 2pm", schedule_name: "2:00 P.M - 3.00 P.M", schedule_type: 'BUSINESS N3,500'},

    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SecondBookingPage');
  }


  process(){
    this.alertCtrl.create({
      title: 'Ticket Processed',
      message: 'Proceed to pay!',
      buttons: [
        {
          text: 'OK',
          handler: () =>{
            this.navCtrl.push('ConfirmPaymentPage');
          }
        }

      ]
    }).present();
  }
}
