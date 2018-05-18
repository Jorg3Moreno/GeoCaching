import { Component } from '@angular/core';
import {NavController, NavParams, ToastController} from 'ionic-angular';
import {PlaceModel} from "./place.model";
import {PlaceService} from "./place.service";

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
  place = new PlaceModel();
  controlChanged: boolean = false;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private placeService: PlaceService,
              public toastCtrl: ToastController) {
    this.place = navParams.get('place');
    this.newPlace();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlacePage');
  }

  savePlace() {
    if (this.place.id === undefined) {
      this.placeService.createPlace(this.place)
        .then(() => {
          this.showToast('Your Place was successfully saved', 'Ok');
          this.navCtrl.pop();
        })
        .catch((error) => {
          this.showToast(error, 'Error');
        });
    } else {
      this.placeService.updatePlace(this.place)
        .then(() => {
          this.showToast('Your Place was successfully updated', 'Ok');
          this.navCtrl.pop();
        })
        .catch((error) => {
          this.showToast(error, 'Error');
        })
    }
  }

  private showToast(msg: string, action: string) {
    const toast = this.toastCtrl.create({
      message: msg,
      showCloseButton: true,
      closeButtonText: action
    });
    toast.present();
  }

  onControlChange() {
    this.controlChanged = true;
  }

  private newPlace() {
    if (this.place.id === undefined) {
      this.controlChanged = true;
    }
  }

}
