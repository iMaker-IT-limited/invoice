import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Submenu2Page } from './submenu2.page';

describe('Submenu2Page', () => {
  let component: Submenu2Page;
  let fixture: ComponentFixture<Submenu2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Submenu2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Submenu2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
