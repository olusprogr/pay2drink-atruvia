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
import { BezahlSystemService } from '../bezahl-system.service';
import {MatCardModule} from '@angular/material/card';


@Component({
  selector: 'app-guthaben',
  standalone: true,
  imports: [ MatButtonModule ,MatInputModule, FormsModule, MatIconModule, MatDividerModule, MatCardModule],
  templateUrl: './guthaben.component.html',
  styleUrl: './guthaben.component.scss'
})
export class GuthabenComponent {
  constructor(public DB: UserService, public BS: BezahlSystemService, public router: Router) {}


amount?: number;

  payIn (amount?: number){

  }
  back(){
    this.router.navigate(['/layout'])
  }
  
  
}
