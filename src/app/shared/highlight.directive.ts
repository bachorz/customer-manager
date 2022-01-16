import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private element: ElementRef) {
   }

  @HostListener('mouseenter')
  highLight(){
    this.element.nativeElement.style.backgroundColor = "grey"
  }

  @HostListener('mouseleave')
  cancelHighLight(){
    this.element.nativeElement.style.backgroundColor = null;
  }
}
