import { Component } from '@angular/core';
import { BezahlSystemService } from '../bezahl-system.service';

@Component({
  selector: 'app-bezahl-system-test-1',
  standalone: true,
  imports: [],
  templateUrl: './bezahl-system-test-1.component.html'
})
export class BezahlSystemTest1Component {

  constructor(public bezahlsystemservice: BezahlSystemService){

    bezahlsystemservice.updateCredits()
  }
}