import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Submenu3Page } from './submenu3.page';

describe('Submenu3Page', () => {
  let component: Submenu3Page;
  let fixture: ComponentFixture<Submenu3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Submenu3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Submenu3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
