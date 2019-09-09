import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective {

  constructor(private element: ElementRef) {
    //element.nativeElement.style.backgroundColor = 'orange';
  }

  @Input('appChangeColor') newColor: string;

  @HostListener('mouseenter') mouseEnter() {
    this.changeColor(this.newColor || 'red');
  }

  @HostListener('mouseleave') mouseLeave() {
    this.changeColor(null);
  }

  private changeColor(color: string) {
    this.element.nativeElement.style.backgroundColor = color;
  }

}
