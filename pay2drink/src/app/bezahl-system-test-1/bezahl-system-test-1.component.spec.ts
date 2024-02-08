import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BezahlSystemTest1Component } from './bezahl-system-test-1.component';

describe('BezahlSystemTest1Component', () => {
  let component: BezahlSystemTest1Component;
  let fixture: ComponentFixture<BezahlSystemTest1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BezahlSystemTest1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BezahlSystemTest1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
