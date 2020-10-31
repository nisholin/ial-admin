import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialLunchComponent } from './speciallunch.component';

describe('IconsComponent', () => {
  let component: SpecialLunchComponent;
  let fixture: ComponentFixture<SpecialLunchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialLunchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialLunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
