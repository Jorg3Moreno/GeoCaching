import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {AboutPage} from "../about/about";

/**
 * Generated class for the PlacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-place',
  templateUrl: 'place.html',
})
export class PlacePage {
  placeName: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.placeName = navParams.get('name');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlacePage');
  }

  navigateBack() {
    this.navCtrl.pop();
  }

  navigateToAbout() {
    this.navCtrl.push(AboutPage);
  }

}
