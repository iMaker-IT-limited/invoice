import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinUsSubmenu2Page } from './join-us-submenu2.page';

describe('JoinUsSubmenu2Page', () => {
  let component: JoinUsSubmenu2Page;
  let fixture: ComponentFixture<JoinUsSubmenu2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinUsSubmenu2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinUsSubmenu2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
