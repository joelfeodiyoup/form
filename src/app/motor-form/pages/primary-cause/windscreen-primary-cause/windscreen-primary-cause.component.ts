import { Component, Input, OnDestroy, AfterViewInit, OnInit, AfterContentInit, AfterContentChecked } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

interface IncidentLocation {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-windscreen-primary-cause',
  templateUrl: './windscreen-primary-cause.component.html'
})
export class WindscreenPrimaryCauseComponent implements OnDestroy, OnInit {
  @Input() parentForm: FormGroup;
  form: FormGroup;
  incidentLocations: IncidentLocation[] = [
    { viewValue: 'Carpark', value: 'CP' },
    { viewValue: 'Driveway', value: 'DW' },
    { viewValue: 'Road', value: 'RD' },
    { viewValue: 'Other', value: 'OTH' },
  ];
  windscreenAlreadyReplacedControl = new FormControl();
  incidentLocationControl = new FormControl();
  amountControl = new FormControl();
  constructor() {
    this.form = new FormGroup({
      windscreenAlreadyReplaced: this.windscreenAlreadyReplacedControl,
      incidentLocation: this.incidentLocationControl,
      amount: this.amountControl
    });
  }
  get windscreenAlreadyReplaced(): boolean {
    const value = this.windscreenAlreadyReplacedControl.value;
    if (!value) {
      return null;
    }
    const alreadyReplaced = JSON.parse(this.windscreenAlreadyReplacedControl.value.toLowerCase());
    return alreadyReplaced;
  }
  test() {
    console.log('something');
  }
  ngOnDestroy() {
    this.parentForm.removeControl('windscreen');
  }
  ngOnInit(): void {
    setTimeout(() => {
      this.parentForm.addControl('windscreen', this.form);
    });

  }
}
