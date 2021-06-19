import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinUsSubmenu1Page } from './join-us-submenu1.page';

describe('JoinUsSubmenu1Page', () => {
  let component: JoinUsSubmenu1Page;
  let fixture: ComponentFixture<JoinUsSubmenu1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinUsSubmenu1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinUsSubmenu1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
