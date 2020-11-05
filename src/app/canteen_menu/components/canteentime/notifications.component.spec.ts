import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanteenTimeComponent } from './canteentime.component';

describe('NotificationsComponent', () => {
  let component: CanteenTimeComponent;
  let fixture: ComponentFixture<CanteenTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanteenTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanteenTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
