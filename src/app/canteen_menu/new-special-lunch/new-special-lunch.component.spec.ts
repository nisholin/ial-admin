import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSpecialLunchComponent } from './new-special-lunch.component';

describe('NewSpecialLunchComponent', () => {
  let component: NewSpecialLunchComponent;
  let fixture: ComponentFixture<NewSpecialLunchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewSpecialLunchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSpecialLunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
