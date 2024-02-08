import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuthabenComponent } from './guthaben.component';

describe('GuthabenComponent', () => {
  let component: GuthabenComponent;
  let fixture: ComponentFixture<GuthabenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuthabenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GuthabenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
