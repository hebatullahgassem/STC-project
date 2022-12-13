import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appNumFormat]'
})
export class NumFormatDirective implements OnInit {

  constructor(private renderer: Renderer2, private el: ElementRef) {
  }
 

  ngOnInit(){
    //console.log(this.el.nativeElement.innerText.length);
    if(this.el.nativeElement){
      let text = this.el.nativeElement.innerText.split(',');
      text.forEach((n: any, i: number) => {
        if(!isNaN(n)){
          text[i] = parseInt(text[i]).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        }
      });
      text = text.join(',');
      this.renderer.setProperty(this.el.nativeElement, 'innerHTML', text);
    }
  }

}
