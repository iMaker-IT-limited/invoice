import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsSubmenu2Page } from './contact-us-submenu2.page';

describe('ContactUsSubmenu2Page', () => {
  let component: ContactUsSubmenu2Page;
  let fixture: ComponentFixture<ContactUsSubmenu2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactUsSubmenu2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactUsSubmenu2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
