import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiriyaniConfigComponent } from './biriyani-config.component';

describe('BiriyaniConfigComponent', () => {
  let component: BiriyaniConfigComponent;
  let fixture: ComponentFixture<BiriyaniConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiriyaniConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BiriyaniConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
