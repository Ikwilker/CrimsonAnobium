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
  bookCred = {name: '', class: '', price: 0, desc: ''};
  books = [];
  items: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alerCtrl: AlertController, public Storage: Storage) {
  	this.Storage.get('myBooks').then((data) => {
  		this.items = data;
  	})
  }

  save(val){
  console.log(val);
  	this.Storage.get('myBooks').then((data => {
  		if(val != null){
  			data.push(val);
  			this.Storage.set('myBooks', data);
  			console.log('myBooks', data);
  		}
  		else{
  			let array = [];
  			array.push(val);
  			this.Storage.set('myBooks', array);
  		}
  	}))
  }

  public sellBook(){

  }

  addBook(){
    this.books.push(this.bookCred);
  }

  testNotice(){
  let alert = this.alerCtrl.create({
    title: 'Thank you!',
    message: 'Your book will be posted and ready for others to purchase',
    buttons: ['Dismiss']
  });
  alert.present();

  }

  setData(){
  	this.Storage.set('text', 'titleSell');
  }

  getData(){
  	this.Storage.get('myData').then((data) => {
  		console.log(data);
      return(data);
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
