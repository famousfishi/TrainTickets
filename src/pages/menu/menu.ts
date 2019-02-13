import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  homePage;
  @ViewChild("content") childNavCtrl: NavController;

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
    this.homePage = 'HomePage';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

  openPage(pageName: string){
    if(pageName == 'about'){
      this.navCtrl.push('AboutPage');
    }

    if(pageName == 'home'){
      this.menuCtrl.swipeEnable(true);
    }
  }



}
