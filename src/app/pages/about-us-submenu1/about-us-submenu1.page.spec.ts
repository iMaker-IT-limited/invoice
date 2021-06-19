import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsSubmenu1Page } from './about-us-submenu1.page';

describe('AboutUsSubmenu1Page', () => {
  let component: AboutUsSubmenu1Page;
  let fixture: ComponentFixture<AboutUsSubmenu1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutUsSubmenu1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUsSubmenu1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
