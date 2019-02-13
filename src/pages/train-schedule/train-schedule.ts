import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController, LoadingController } from 'ionic-angular';
import { ElementRef } from '@angular/core';
import { AllServicesProvider } from '../../providers/all-services/all-services';




@IonicPage()
@Component({
  selector: 'page-train-schedule',
  templateUrl: 'train-schedule.html',
})
// @ViewChild('departureDiv') depatureDiv:ElementRef;

export class TrainSchedulePage {
  buttonClicked : boolean = false;
 // buttonClicked2: boolean = false;
  deptDate: string = "";
  returnDate: string = "";
  passengerEmail: string;
  passengerName: string;
  passengerMobile: number;
  diffWays: string;
  toMethod: string;
  fromMethod: string;
  schedules: any[] = [];
  numberSeats: number;
 // schedule_task : any;
 display: string = "none";
 departureDisplay: string = "block";
 showMe: boolean;
 
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController,
   public departureDiv:ElementRef, public alertCtrl: AlertController, public loadCtrl: LoadingController, public allServices: AllServicesProvider) {
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
    console.log('ionViewDidLoad TrainSchedulePage');
  }

  ionViewWillEnter(){
    console.log(this.deptDate = this.navParams.get('deptDate'));
    console.log(typeof this.returnDate);
    console.log(this.returnDate = this.navParams.get('returnDate'));
    console.log(this.passengerEmail = this.navParams.get('passengerEmail'));
    console.log(this.passengerName = this.navParams.get('passengerName'));
    console.log(this.passengerMobile = parseInt(this.navParams.get('passengerMobile')));
    console.log(this.diffWays = this.navParams.get('diffWays'));
    console.log(this.fromMethod = this.navParams.get('fromMethod'));
    console.log(this.toMethod = this.navParams.get('toMethod'));
    console.log(this.numberSeats = this.navParams.get('numberSeats'));
    

    


  }

  toggle(){
    this.buttonClicked = !this.buttonClicked;


  }

  // toggle2(){
  //   this.buttonClicked = false;
    
  // }

  getDisplayStatus() {
    return this.display;
  }

  getDepartureDisplayStatus() {
    return this.departureDisplay;
  }

  process(){
    //a call to the api
  
    this.alertCtrl.create({
      title: 'Confirm Ticket Booking',
      message: 'Complete your booking process?',
      buttons: [
        {
          text: 'Cancel',
          //role: 'cancel',
          handler: () => {
           // console.log('Cancel clicked');
           //this.navCtrl.push('TicketPage');
           console.log('back baby...')
          }
        },
        {
          text: 'OK',
          role: 'cancel',
          handler: () => {
            console.log('back baby..');
           if(this.diffWays == 'o'){
            console.log('one way');
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

           }else if(this.diffWays == 'r'){
             this.navCtrl.push('SecondBookingPage');

          // then perform all these processes ....

           /* console.log('return way');
            this.display = "block";
             this.departureDisplay = "none";
             this.getDisplayStatus();
    
            this.getDepartureDisplayStatus();

             this.alertCtrl.create({
              title: 'Ticket Booked',
              message: 'Your ticket has been booked',
              buttons: [
                {
                  text: 'OK',
                  handler: () =>{
                    this.navCtrl.push('ConfirmPaymentPage');
                  }
                }

              ]
            }).present();         
            
            */
       
           }
          }
        }
      ]

      
    }).present();
  }

  

}
