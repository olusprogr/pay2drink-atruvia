import { Injectable } from '@angular/core';

type User = {
  name: string;
  userPassword: number;
  userID: number;
  guthaben: number;
  geburtsjahr: number;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUser?: User

  constructor() {}

  setUser(databaseuser: User) {
    this.currentUser = databaseuser
  }

  getUser(): User | undefined {
    return this.currentUser
  }

  getUserCredits() {
    return this.currentUser?.guthaben
  }

  resetUser() {
    this.currentUser = undefined
  }

  getUserTestingData(): User[] {
    let testDataForUser = [
      {
        name: 'Olivier Chodura',
        userPassword: 123456,
        userID: 12345,
        guthaben: -10,
        geburtsjahr: 2008,
      },
      {
        name: 'Tom Fux',
        userPassword: 300108,
        userID: 30108,
        guthaben: 100,
        geburtsjahr: 2008,
      },
      {
        name: 'Ben Schmieding',
        userPassword: 270208,
        userID: 27208,
        guthaben: 911,
        geburtsjahr: 2008,
      },
      {
        name: 'Florian Langanki',
        userPassword: 222222,
        userID: 11111,
        guthaben: 420,
        geburtsjahr: 2009,
      },
      {
        name: 'Luis Becker',
        userPassword: 987654,
        userID: 98765,
        guthaben: 500,
        geburtsjahr: 2008,
      },
      {
        name: 'Sverre Nottebaum',
        userPassword: 876543,
        userID: 87654,
        guthaben: 0,
        geburtsjahr: 2005,
      },
      {
        name: 'Milena Frasch',
        userPassword: 826394,
        userID: 54321,
        guthaben: 187,
        geburtsjahr: 2008,
      },
      {
        name: 'Justus Dömer',
        userPassword: 936481,
        userID: 98765,
        guthaben: 0,
        geburtsjahr: 2008,
      },
      {
        name: 'Finn Uylenkatze',
        userPassword: 926546,
        userID: 94739,
        guthaben: 0,
        geburtsjahr: 2008,
      },
      {
        name: 'Jonas Fritz',
        userPassword: 456789,
        userID: 98765,
        geburtsjahr: 2008,
        guthaben: 69,
      },
    ]
    return testDataForUser
  }

  @Injectable({
    providedIn: 'root'
  })

  checkForValidUser(userID: string|number, userPassword: string|number) {
    const userIDAsString = new String(userID);
    const userPasswordAsString = new String(userPassword)
    
    if (userIDAsString.length !== 5 && userPasswordAsString.length !== 6) {
      return false;
    }
    
    const userIDAsNum = new Number(userID)
    const userPasswordAsNum = new Number(userPassword)

    for (const user of this.getUserTestingData()) {
      if (user.userID == userIDAsNum && user.userPassword == userPasswordAsNum) {
        this.setUser(user)
        return true
      }
    }
    return false;
  }
}