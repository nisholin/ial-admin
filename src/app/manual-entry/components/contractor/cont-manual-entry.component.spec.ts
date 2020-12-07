import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractorManualEntryComponent } from './cont-manual-entry.component';

describe('AddNewCompanyComponent', () => {
  let component: ContractorManualEntryComponent;
  let fixture: ComponentFixture<ContractorManualEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractorManualEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractorManualEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
