import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpRegistrationComponent } from './emp_registration.component';

describe('DashboardComponent', () => {
  let component: EmpRegistrationComponent;
  let fixture: ComponentFixture<EmpRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
