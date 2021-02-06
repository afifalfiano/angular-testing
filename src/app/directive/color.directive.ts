import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  constructor(
    private elRef: ElementRef
  ) {
    elRef.nativeElement.style.background = 'orange';
    elRef.nativeElement.style.color = 'white';
    elRef.nativeElement.style.borderRadius = '3px';
    elRef.nativeElement.style.padding = '4px';
  }

}
