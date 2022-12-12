import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { CountSpeed } from '../enum/countSpeed.enum';

@Directive({
  selector: '[appCountUp]'
})
export class CountUpDirective implements OnInit {

  constructor(
    private el: ElementRef, private renderer:Renderer2
  ) {}

  countSpeed = CountSpeed;

  @Input() appCountUp: number = 0;
  @Input() speed: number = 10;
  countUp = 0;

  stopRedeem: boolean = false;

  count: any;

  

  ngOnInit(): void {

    this.count = setInterval(() => {
      this.renderer.setProperty(this.el.nativeElement,'innerHTML',this.countUp);
       this.countUp++;
       if (this.countUp > this.appCountUp) {
         clearInterval(this.count);
       }
     }, this.speed);
  }

}
