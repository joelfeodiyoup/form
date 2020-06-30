import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SingleVehiclePrimaryCauseComponent } from './single-vehicle-primary-cause/single-vehicle-primary-cause.component';


@Component({
  selector: 'app-primary-cause',
  templateUrl: './primary-cause.component.html'
})
export class PrimaryCauseComponent implements OnInit {
  form: FormGroup;
  @ViewChild(SingleVehiclePrimaryCauseComponent, { static: true }) singleVehiclePrimaryCause: SingleVehiclePrimaryCauseComponent;

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

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      claimType: this.claimTypeControl
    });
  }
  ngOnInit() {
  }
  test() {
    console.log('something');
  }
}
