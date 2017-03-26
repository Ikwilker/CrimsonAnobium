import { Component ,Pipe, PipeTransform, Injectable} from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController,  ModalController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  bookCred = {name: '', class: '', price: 0, desc: ''};
  books = [];
  items: any;

  constructor(public navCtrl: NavController, public Storage: Storage, public modalCtrl: ModalController) {
    this.Storage.get('myBooks').then((data) => {
  		this.items = data;
  	})
  }
/*  
openModal(){
  let modal = this.modalCtrl.create(ModalContentPage);
  modal.present();
}
*/
  getData(){
  	this.Storage.get('myBooks').then((data) => {
  		console.log(data);
      for(let book of this.books){

      }

  	})
  }

}
