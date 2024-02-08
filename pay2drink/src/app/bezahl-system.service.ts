import { Injectable } from '@angular/core';
import { UserService } from './database-manager.service';

@Injectable({
  providedIn: 'root'
})
export class BezahlSystemService {

  constructor(public DatabaseUser: UserService) {

  }

  updateCredits(produkte?: []) {
    // bekomme ein value von der datenbank und aktualisiert es
    let test: UserService = new UserService()
    let test2: UserService = new UserService()
    console.log(test.getUserTestingData())
    console.log(test.checkForValidUser(123456, 12345))

  }

  payIn(produkte: [], value: []){
    // bekommt Produkte und value (Kontostand) von der datenbank 
    let test: UserService = new UserService()
    let test2: UserService = new UserService()
    console.log()
  }

  datenBerechnen() {

  }

// bekommt den Wert der products und den value und rechnet das value minus das product


}
 //bestaetigung5Euro(produkte: []){
  // if (produktKostenUeber5Euro()) {
   //let abfragenPIN = true
    // wenn das Produkt/die Produkte mehr als 5€ kostet, soll PIN abgefragt werden
 //  } 
// }
 //payOut(value: []): void {
// schickt aktualisiertes value zurück an den Warenkorb/Datenbank User/Products
 // return null
 //}
 