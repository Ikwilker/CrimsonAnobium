import { Component,Pipe, PipeTransform, Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { ResultsPage } from '../pages/results/results';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      /*
      let db = new SQLite();
      db.openDatabase({
               name: "data.db",
               location: "default"
           }).then(() => {
               db.executeSql("CREATE TABLE IF NOT EXISTS books (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, class TEXT, price FLOAT, email TEXT, description TEXT)", {}).then((data) => {
                   console.log("TABLE CREATED: ", data);
               }, (error) => {
                   console.error("Unable to execute sql", error);
               })
           }, (error) => {
               console.error("Unable to open database", error);
           });
          */
      splashScreen.hide();
    });

  }
}
