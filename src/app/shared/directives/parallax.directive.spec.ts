import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ParallaxDirective } from './parallax.directive';

describe('ParallaxDirective', () => {
  @Component({
    selector: 'app-test',
    template: `<div class="under-test" ParallaxDirective>Hello</div>`,
  })
  class DummyComponent {}

  let fixture: ComponentFixture<DummyComponent>;
  let component: DummyComponent;
  let ParallaxDirective: ParallaxDirective;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [component, ParallaxDirective],
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
