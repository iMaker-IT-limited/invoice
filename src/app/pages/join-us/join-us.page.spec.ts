import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinUsPage } from './join-us.page';

describe('JoinUsPage', () => {
  let component: JoinUsPage;
  let fixture: ComponentFixture<JoinUsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinUsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinUsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
