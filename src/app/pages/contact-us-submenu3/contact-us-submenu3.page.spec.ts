import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsSubmenu3Page } from './contact-us-submenu3.page';

describe('ContactUsSubmenu3Page', () => {
  let component: ContactUsSubmenu3Page;
  let fixture: ComponentFixture<ContactUsSubmenu3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactUsSubmenu3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactUsSubmenu3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
