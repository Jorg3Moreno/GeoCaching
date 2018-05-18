import { Component } from '@angular/core';
import {AlertController, NavController, ToastController} from 'ionic-angular';
import {PlacePage} from "../place/place";
import {PlaceModel} from "../place/place.model";
import {PlaceService} from "../place/place.service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  places: PlaceModel[];

  constructor(public navCtrl: NavController,
              public placeService: PlaceService,
              private toastCtrl: ToastController,
              private alertCtrl: AlertController) {
    console.log(`en constructor`);
    this.placeService.getPlaces().valueChanges()
      .subscribe((places) => {
        this.places = places;
      })
  }

  goToPlace(place: PlaceModel) {
    if (place === undefined) {
      this.navCtrl.push(PlacePage, {place: new PlaceModel()});
    } else {
      this.navCtrl.push(PlacePage, {place: place});
    }
  }

  deletePlace(place: PlaceModel) {
    let confirm = this.alertCtrl.create({
      title: 'Are you sure?',
      message: 'Do you want delete this place?',
      buttons: [
        {
          text: 'CANCEL',
          handler: () => {
          }
        },
        {
          text: 'YES',
          handler: () => {
            this.placeService.deletePlace(place)
              .then(() => {
                this.showToast('Your Place was successfully deleted', 'Ok');
              })
              .catch((error) => {
                this.showToast(error, 'Error');
              })
          }
        }
      ]
    });
    confirm.present();
  }

  private showToast(msg: string, action: string) {
    const toast = this.toastCtrl.create({
      message: msg,
      showCloseButton: true,
      closeButtonText: action
    });
    toast.present();
  }
}
