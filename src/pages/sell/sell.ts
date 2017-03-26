import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/*
  Generated class for the Sell page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-sell',
  templateUrl: 'sell.html'
})
export class SellPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alerCtrl: AlertController, public Storage: Storage) {
  
  }

  setData(){
  	this.Storage.set('text', 'titleSell');
  }

  getData(){
  	this.Storage.get('myData').then((data) => {
  		console.log(data);
  	})
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SellPage');
  }

  doAlert() {
    let alert = this.alerCtrl.create({
      title: 'New Friend!',
      message: 'The account feature has not been implemented yet but is coming soon!',
      buttons: ['Ok']
    });
    alert.present()
  }

}

