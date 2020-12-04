import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanteenScreenComponent } from './canteen-screen.component';

describe('CanteenScreenComponent', () => {
  let component: CanteenScreenComponent;
  let fixture: ComponentFixture<CanteenScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanteenScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CanteenScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
