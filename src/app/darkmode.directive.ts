import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDarkmode]'
})
export class DarkmodeDirective {

  constructor(private elem:ElementRef) {
    this.elem.nativeElement.style.color='white'
    this.elem.nativeElement.backgroundColor='#121212'
  }

  @HostListener("toggle") onClick(){
    
  }

}
