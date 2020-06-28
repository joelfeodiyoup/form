import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-primary-cause',
  templateUrl: './primary-cause.component.html'
})
export class PrimaryCauseComponent {
  form: FormGroup;

  // not a great name
  claimTypeControl = new FormControl();

  get showSingleVehicle(): boolean {
    const showSingleVehicle = this.claimTypeControl.value === 'singleVehicle';
    return showSingleVehicle;
  }
  get showTwoVehicles(): boolean {
    const showTwoVehicle = this.claimTypeControl.value === 'twoVehicles';
    return showTwoVehicle;
  }
  get showMultiple(): boolean {
    const showMultiple = this.claimTypeControl.value === 'multipleVehicles';
    return showMultiple;
  }
  get showWindscreen(): boolean {
    const showWindscreen = this.claimTypeControl.value === 'windscreen';
    return showWindscreen;
  }

  constructor() {
    this.form = new FormGroup({
      claimType: this.claimTypeControl
    });
  }
}
