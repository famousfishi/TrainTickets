import { Component } from '@angular/core';
import { NavController, IonicPage, ToastController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  from: any[];
  fromMethod: any;
  to: any[];
  toMethod: any;
  deptDate: any;
  returnDate: any;
  
  diffWays: any;
  passengerEmail: string = "";
  passengerName: string ="";
  passengerMobile : number;
  numberSeats : number = 1;

  radioClicked: boolean = false;


  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {
    this.from = [

      // {method_id: "select", method_title: "Select"},
       {network_id: "abuja", network_name: "Abuja"},
       {network_id: "idu", network_name: "Idu"},
       {network_id: "kaduna", network_name: "Kaduna"},
       {network_id: "kubwa", network_name:"Kubwa"},
       {network_id: "rigasa", network_name: "Rigasa"}
 
     ];
     this.to = [

      // {method_id: "select", method_title: "Select"},
       {network_id: "abuja", network_name: "Abuja"},
       {network_id: "idu", network_name: "Idu"},
       {network_id: "kaduna", network_name: "Kaduna"},
       {network_id: "kubwa", network_name:"Kubwa"},
       {network_id: "rigasa", network_name: "Rigasa"}
 
     ];
  }


  oneWay(){
    this.radioClicked = false;
  }

  returnWay(){
      this.radioClicked = !this.radioClicked;
  }


  submit(){
    if(this.toMethod == "" || this.fromMethod == "" || this.numberSeats ==  0 || this.passengerEmail =="" || 
        this.passengerName =="" || this.passengerMobile == 0 || this.deptDate == "" || this.returnDate == "" ||
      this.diffWays == "" ){
        this.toastCtrl.create({
          message: 'Please fill all fields to continue',
          duration: 4000
        }).present();
      } else {
    
    this.navCtrl.push('TrainSchedulePage', {fromMethod: this.fromMethod,
      toMethod: this.toMethod,
      passengerEmail: this.passengerEmail,
      passengerMobile: this.passengerMobile,
      passengerName: this.passengerName, 
      deptDate: this.deptDate,
      returnDate: this.returnDate,
      numberSeats: this.numberSeats,
      diffWays: this.diffWays});
  }
}

}
