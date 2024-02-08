import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list'; 
import {ScrollingModule} from '@angular/cdk/scrolling'; 


@Component({
  selector: 'app-getraenkemenue',
  standalone: true,
  imports: [MatGridListModule, ScrollingModule],
  templateUrl: './getraenkemenue.component.html',
  styleUrl: './getraenkemenue.component.scss'
})
export class GetraenkemenueComponent {
  items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);

}
