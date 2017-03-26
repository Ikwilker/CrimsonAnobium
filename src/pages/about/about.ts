import { Component ,Pipe, PipeTransform, Injectable} from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController,  ModalController, NavParams, ViewController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

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
      title: 'Login',
      message: "Enter a name for this new album you're so keen on adding",
      inputs: [
        {
          name: 'title',
          placeholder: 'Title'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }  
}



