import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseProductServiceService {

  constructor() { }

  getProductTestingData() {
    let testDataForProduct = [
      {
        name: 'Wasser',
        preis: 1.49,
        menge: 0.5,
        altersbeschreankung: 0,
      },
      {
        name: 'Apfelschorle',
        preis: 2.49,
        menge: 0.5,
        altersbeschreankung: 0,
      },
      {
        name: 'Orangensaft',
        preis: 2.49,
        menge: 0.5,
        altersbeschreankung: 0,
      },
      {
        name: 'Cola',
        preis: 3.49,
        menge: 0.5,
        altersbeschreankung: 0  
      },
      {
        name: 'Fanta',
        preis: 3.49,
        menge: 0.5,
        altersbeschreankung: 0
      }
    ]

    return testDataForProduct
  }

  checkForValidProduct(productName: string) {
    for (let product of this.getProductTestingData()) {
        if (product.name == productName) {
          return true
        }
    }
    return false;
  }
}
