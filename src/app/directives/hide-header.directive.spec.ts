import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HideHeaderDirective } from './hide-header.directive';

describe('HideHeaderDirective', () => {
  @Component({
    selector: 'app-test',
    template: `<div class="under-test" HideHeaderDirective>Hello</div>`,
  })
  class DummyComponent {}

  let fixture: ComponentFixture<DummyComponent>;
  let component: DummyComponent;
  let HideHeaderDirective: HideHeaderDirective;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [component, HideHeaderDirective],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DummyComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
