import {Injectable} from "@angular/core";
import {AngularFireDatabase} from "angularfire2/database";
import {PlaceModel} from "./place.model";

@Injectable()
export class PlaceService {
  constructor(private ngFireDB: AngularFireDatabase) {
  }

  public createPlace(place: PlaceModel) {
    return this.ngFireDB.database.ref(`/places/${place.id}`).set(place);
  }

  public getPlaces() {
    return this.ngFireDB.list('/places/');
  }

  public getPlace(id: number) {
    return this.ngFireDB.object(`/places/${id}`);
  }

  public updatePlace(place: PlaceModel) {
    return this.ngFireDB.database.ref(`/places/${place.id}`).update(place);
  }

  public deletePlace(place: PlaceModel) {
    return this.ngFireDB.database.ref(`/places/${place.id}`).remove();
  }
}
