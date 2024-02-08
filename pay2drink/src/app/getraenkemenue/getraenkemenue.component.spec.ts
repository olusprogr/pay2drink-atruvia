import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetraenkemenueComponent } from './getraenkemenue.component';

describe('GetraenkemenueComponent', () => {
  let component: GetraenkemenueComponent;
  let fixture: ComponentFixture<GetraenkemenueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetraenkemenueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetraenkemenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
