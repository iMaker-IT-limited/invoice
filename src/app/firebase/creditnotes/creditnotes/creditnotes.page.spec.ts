import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditnotesPage } from './creditnotes.page';

describe('CreditnotesPage', () => {
  let component: CreditnotesPage;
  let fixture: ComponentFixture<CreditnotesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditnotesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditnotesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
