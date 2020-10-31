import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatererReportsComponent } from './caterer-reports.component';

describe('CatererReportsComponent', () => {
  let component: CatererReportsComponent;
  let fixture: ComponentFixture<CatererReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatererReportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatererReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
