import { Component ,Pipe, PipeTransform, Injectable} from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController,  ModalController, NavParams, ViewController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ResultsPage } from '../pages/results/results';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  bookCred = {name: '', class: '', price: 0, desc: ''};
  books = [];
  items: any;

  constructor(public navCtrl: NavController, public Storage: Storage, public modalCtrl: ModalController, public alertCtrl: AlertController) {
    this.Storage.get('myBooks').then((data) => {
  		this.items = data;
  	})
  }
/*  
openModal(inSearch){
  let modal = this.modalCtrl.create(ModalContentPage);
  modal.present();
}

  goToResults(){
    this.navCtrl.push(ResultsPage)
  }

*/
  getData(){
  	this.Storage.get('myBooks').then((data) => {
  		console.log(data);
      for(let book of this.books){

      }

  	})
  }

showPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'Sorry!',
      message: "We were not able to get this feature working but will be implemented in the near future",
      buttons: ['OK']
    });
    prompt.present();
  }  
}



