import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyItemConfigComponent } from './weekly-Item-config.component';

describe('AddNewMenuComponent', () => {
  let component: WeeklyItemConfigComponent;
  let fixture: ComponentFixture<WeeklyItemConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeeklyItemConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyItemConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
