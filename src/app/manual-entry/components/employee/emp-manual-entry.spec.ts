import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpManualEntry } from './emp-manual-entry.component';

describe('NewCategoryComponent', () => {
  let component: EmpManualEntry;
  let fixture: ComponentFixture<EmpManualEntry>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpManualEntry ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpManualEntry);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
