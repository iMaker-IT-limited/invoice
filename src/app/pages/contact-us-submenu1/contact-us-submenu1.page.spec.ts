import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsSubmenu1Page } from './contact-us-submenu1.page';

describe('ContactUsSubmenu1Page', () => {
  let component: ContactUsSubmenu1Page;
  let fixture: ComponentFixture<ContactUsSubmenu1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactUsSubmenu1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactUsSubmenu1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
