import { Component, DebugElement, ElementRef, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from 'protractor';
import { ColorDirective } from './color.directive';

@Component({
  template: `<p appColor>Test</p>`,
})
class TestComponent {

}

describe('ColorDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let element: HTMLElement;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, ColorDirective],
    });
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
  });

  it('should create an instance', () => {
    expect(component).toBeDefined();
  });

  it('should have an orange backgroundColor and white color', () => {
    const check = element.querySelector('p');

    expect(check.style.backgroundColor).toEqual('orange');
    expect(check.style.color).toEqual('white');
  });

  it('should have a 3px borderRadius and 4px Padding', () => {
    const check = element.querySelector('p');

    expect(check.style.borderRadius).toEqual('3px');
    expect(check.style.padding).toEqual('4px');
  });











  // it('should have a red background color and white color', () => {
  //   const dataService = TestBed.inject(DataService);
  //   const component = new FormDataComponent(dataService);
  //   const elRef = TestBed.inject(ElementRef);
  //   const directive = new ColorDirective(elRef);
  //   expect(component.dataLogin[0].password).toBeTrue();
  // });
});
