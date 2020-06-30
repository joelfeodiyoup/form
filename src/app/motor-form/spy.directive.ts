import { Directive, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';

@Directive({selector: '[appSpy]'})
export class SpyDirective implements OnInit, OnDestroy {
  @Output()
    componentReady = new EventEmitter();

  constructor() { }

  ngOnInit()    {
    this.componentReady.emit();
  }

  ngOnDestroy() {  }
}
