import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { speedEnum } from '../enum/countSpeed.enum';

@Directive({
  selector: '[appCountUp]'
})
export class CountUpDirective implements OnInit {

  constructor(
    private el: ElementRef, private renderer:Renderer2
  ) {}


  @Input() appCountUp: number = 0;
  //@Input() speed : number = 1;
  @Input() speed : string = speedEnum.high;
  speedVal: number = 0;
  //@Input() speed = CountSpeed;
  countUp = 0;

  stopRedeem: boolean = false;

  count: any;

  

  ngOnInit(): void {

    if(this.speed == speedEnum.high){
      this.speedVal = 10;
    } else if(this.speed == speedEnum.low){
      this.speedVal = 1000;
    }else if(this.speed == speedEnum.medium){
      this.speedVal = 200;
    }

    this.count = setInterval(() => {
      this.renderer.setProperty(this.el.nativeElement,'innerHTML',this.countUp);
       this.countUp++;
       if (this.countUp > this.appCountUp) {
         clearInterval(this.count);
       }
     }, this.speedVal);
  }

}
