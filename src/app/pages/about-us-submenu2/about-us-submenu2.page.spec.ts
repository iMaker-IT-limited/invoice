import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsSubmenu2Page } from './about-us-submenu2.page';

describe('AboutUsSubmenu2Page', () => {
  let component: AboutUsSubmenu2Page;
  let fixture: ComponentFixture<AboutUsSubmenu2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutUsSubmenu2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUsSubmenu2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
