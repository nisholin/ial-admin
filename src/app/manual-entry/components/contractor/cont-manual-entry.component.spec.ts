import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractorManualEntry } from './cont-manual-entry.component';

describe('AddNewCompanyComponent', () => {
  let component: ContractorManualEntry;
  let fixture: ComponentFixture<ContractorManualEntry>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractorManualEntry ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractorManualEntry);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
