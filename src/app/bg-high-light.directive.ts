import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appBgHighLight]'
})
export class BgHighLightDirective {

  @Input('appBgHighLight') BgColorName: string = "Black";

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.el.nativeElement.style.backgroundColor = this.BgColorName;
  }

}
