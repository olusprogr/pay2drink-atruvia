import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BezahlsystemComponent } from './bezahlsystem.component';

describe('BezahlsystemComponent', () => {
  let component: BezahlsystemComponent;
  let fixture: ComponentFixture<BezahlsystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BezahlsystemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BezahlsystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
