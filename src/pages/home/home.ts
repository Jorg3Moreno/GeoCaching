import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {PlacePage} from "../place/place";
import {PlaceModel} from "../place/place.model";
import {PlaceService} from "../place/place.service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  places: PlaceModel[];

  constructor(public navCtrl: NavController, public placeService: PlaceService) {
    console.log(`en constructor`);
    this.placeService.getPlaces()
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

}
