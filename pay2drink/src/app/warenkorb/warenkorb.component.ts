import { Component } from '@angular/core';
import { BezahlSystemService } from '../bezahl-system.service';
import { CommonModule } from '@angular/common';
import { MatLine } from '@angular/material/core';
import { MatList,  MatListItem } from '@angular/material/list';
import { LayoutComponent } from '../layout/layout.component';
import { DatabaseProductServiceService } from '../database-product-service.service';
@Component({
  selector: 'app-warenkorb',
  standalone: true,
  imports: [CommonModule,MatLine,MatList,MatListItem],
  templateUrl: './warenkorb.component.html',
  styleUrl: './warenkorb.component.scss'
})
export class WarenkorbComponent {
  constructor(public BS: BezahlSystemService, public lay: LayoutComponent, public DB: DatabaseProductServiceService) {

  }

  warenKorb() {
    let prod = this.DB.getProductTestingData()
    return prod
  }
}
export class MatListModule {

}
