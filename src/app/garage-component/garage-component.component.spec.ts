import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GarageComponentComponent } from './garage-component.component';

describe('GarageComponentComponent', () => {
  let component: GarageComponentComponent;
  let fixture: ComponentFixture<GarageComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GarageComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GarageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
