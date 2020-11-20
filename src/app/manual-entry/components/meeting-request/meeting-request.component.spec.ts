import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingRequestComponent } from './meeting-request.component';

describe('TableListComponent', () => {
  let component: MeetingRequestComponent;
  let fixture: ComponentFixture<MeetingRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetingRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
