import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-endscreen',
  standalone: true,
  imports: [],
  templateUrl: './endscreen.component.html',
  styleUrl: './endscreen.component.scss'
})
export class EndscreenComponent {

  constructor(private router: Router){
   setTimeout(() => {
    this.router.navigate (['/']);
  }, 5000);


}




}
