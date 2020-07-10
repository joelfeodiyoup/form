import { Directive, OnInit, OnDestroy, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Directive({selector: '[appSubForm]'})
export class SpyDirective implements OnInit, OnDestroy {
  @Input()
    parentForm: FormGroup;
  @Input()
    formControl: string;

  constructor() { }

  ngOnDestroy() {
    this.parentForm.removeControl(this.formControl);
  }
  ngOnInit() {
    setTimeout(() => {
    // this.parentForm.addControl(this.formControl, this.form);
    });
  }
}
