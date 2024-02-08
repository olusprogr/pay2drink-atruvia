import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { Router, Routes } from '@angular/router';
import { DatabaseManagerComponent } from '../database-manager/database-manager.component';
import { DatabaseProductServiceService } from '../database-product-service.service';
import { UserService } from '../database-manager.service';
import { User } from '../getraenkemenue/User';
import { WarenkorbComponent } from '../warenkorb/warenkorb.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule, WarenkorbComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
  
})
export class LayoutComponent {
  constructor(private router: Router, public DB: UserService){}

public kassegehen (): void {

}

public aufladen (): void {
  this.router.navigate (['guthaben']);

}

public system (): void {

}

public alkf (): void {

}

public alkn (): void {

}

public alkh (): void {

}

public bezahlung (): void {
  this.router.navigate(['/endscreen']);
}

username = String(this.DB.getUser()?.name);
credits = String(this.DB.getUser()?.guthaben)



abmelden(): void{
  
  this.router.navigate ([''])
  this.DB.resetUser()


  setTimeout(() => {
    alert('Erfolgreich Ausgeloggt')
    }, 1000);
 
}
}





  