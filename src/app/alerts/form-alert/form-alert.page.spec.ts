import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAlertPage } from './form-alert.page';

describe('FormAlertPage', () => {
  let component: FormAlertPage;
  let fixture: ComponentFixture<FormAlertPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAlertPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAlertPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
