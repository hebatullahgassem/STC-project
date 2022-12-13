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
      let text = this.el.nativeElement.innerText.split(' '); //split words
      text.forEach((t: any, n: number) => {
        if(!isNaN(t)){
          text[n] = parseInt(text[n]).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        }
      });
      text = text.join(' '); //separate each element in array(each word) with join
      this.renderer.setProperty(this.el.nativeElement, 'innerHTML', text);
    }
  }

}
