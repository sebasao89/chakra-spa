import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import { PlaceInterface } from '../interfaces/place.interface';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  constructor(private firestore: Firestore) { }

  addPlace(place: PlaceInterface) {
    const placeRef = collection(this.firestore, 'places')
    return addDoc(placeRef, place)
  }
}
