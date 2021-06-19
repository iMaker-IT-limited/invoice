import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsSubmenu3Page } from './about-us-submenu3.page';

describe('AboutUsSubmenu3Page', () => {
  let component: AboutUsSubmenu3Page;
  let fixture: ComponentFixture<AboutUsSubmenu3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutUsSubmenu3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUsSubmenu3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
