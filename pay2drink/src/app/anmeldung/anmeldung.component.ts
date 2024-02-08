import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { User } from '../getraenkemenue/User';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { Router, Routes } from '@angular/router';
import { TestBed } from '@angular/core/testing';
import { DatabaseProductServiceService } from '../database-product-service.service';
import { DatabaseManagerComponent } from '../database-manager/database-manager.component';
import { UserService } from '../database-manager.service';
@Component({
  selector: 'app-anmeldung',
  standalone: true,
  imports: [ MatButtonModule ,MatInputModule, FormsModule, MatIconModule, MatDividerModule ],
  templateUrl: './anmeldung.component.html',
  styleUrl: './anmeldung.component.scss'
})
export class AnmeldungComponent {

  userID?: number | null;
  userPassword?: number|null;


constructor(private router: Router, public DB: UserService){
  console.log(DB.getUserTestingData())
 console.log(DB.checkForValidUser(12345, 123456))
 console.log(DB.getUserCredits())
}


  public Submit(): void {
    if (this.userID && this.userPassword && this.DB.checkForValidUser(this.userID, this.userPassword)){
      this.router.navigate (['/layout'])
    }
     else{
      this.userID = null;
      this.userPassword = null;
      alert('Passwort oder ID falsch');
     }
    




     
   }

  














}
