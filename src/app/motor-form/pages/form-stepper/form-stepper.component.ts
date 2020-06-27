import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-form-stepper',
  templateUrl: './form-stepper.component.html'
})
export class FormStepperComponent {
  constructor(private router: Router, private route: ActivatedRoute) { }
  previous() {
    const route = this.route.snapshot.routeConfig;
    const config = this.router.config;
    const index = config.indexOf(route);
    const nextPath = config[index - 1].path;
    this.router.navigate([nextPath]);
  }
  next() {
    const route = this.route.snapshot.routeConfig;
    const config = this.router.config;
    const index = config.indexOf(route);
    const nextPath = config[index + 1].path;
    this.router.navigate([nextPath]);
  }
}
