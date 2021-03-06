import { Component, Input, OnInit, OnDestroy, AfterViewChecked, AfterViewInit, AfterContentInit, AfterContentChecked } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

interface PrimaryCause {
  value: string;
  viewValue: string;
}

interface IncidentLocation {
  value: string;
  viewValue: string;
}

interface ResponsiblePerson {
  value: string;
  viewValue: string;
  validFor?: any[];
  hideFor?: any[];
}
interface IncidentType {
  value: string;
  viewValue: string;
  validFor?: any[];
}

@Component({
  selector: 'app-single-vehicle-primary-cause',
  templateUrl: './single-vehicle-primary-cause.component.html'
})
export class SingleVehiclePrimaryCauseComponent implements OnInit, OnDestroy {
  // tslint:disable-next-line:no-input-rename
  @Input() parentForm: FormGroup;
  form: FormGroup;
  primaryCauses: PrimaryCause[] = [
      {viewValue: 'Damage while parked', value: 'PCM-023'},
      {viewValue: 'Fire damage', value: 'PCM-026'},
      {viewValue: 'Hit an animal', value: 'PCM-028'},
      {viewValue: 'Hit an object with vehicle', value: 'PCM-029'},
      {viewValue: 'Lost control of vehicle', value: 'PCM-033'},
      {viewValue: 'Malicious damage', value: 'PCM-009'},
      {viewValue: 'Theft', value: 'PCM-014'},
      {viewValue: 'Weather damage', value: 'PCM-012'},
      {viewValue: 'Other', value: 'PCM-011'},
  ];
  incidentLocations: IncidentLocation[] = [
    { viewValue: 'Carpark', value: 'CP' },
    { viewValue: 'Driveway', value: 'DW' },
    { viewValue: 'Road', value: 'RD' },
    { viewValue: 'Other', value: 'OTH' },
  ];
  responsiblePersons: ResponsiblePerson[] = [
    { viewValue: 'The driver of my vehicle', value: 'myvehicle', hideFor: ['PCM-009'] },
    { viewValue: 'Another person was responsible', value: 'othervehicle', hideFor: ['PCM-028', 'PCM-029'] },
  ];
  incidentTypes: IncidentType[] = [
    // fire damage
    { viewValue: 'Arson', value: 'ITM-043', validFor: [ 'PCM-026' ] },
    { viewValue: 'Electrical/Mechanical', value: 'ITM-081', validFor: [ 'PCM-026' ] },
    { viewValue: 'Bushfire', value: 'ITM-044', validFor: [ 'PCM-026' ] },
    // theft
    { viewValue: 'Arson', value: 'ITM-043', validFor: [ 'PCM-014' ] },
    { viewValue: 'Attempted theft', value: 'ITM-073', validFor: [ 'PCM-014' ] },
    { viewValue: 'Theft of keys', value: 'ITM-116', validFor: [ 'PCM-014' ] },
    { viewValue: 'Stolen and not recovered', value: 'ITM-114', validFor: [ 'PCM-014' ] },
    { viewValue: 'Stolen and recovered', value: 'ITM-115', validFor: [ 'PCM-014' ] },
    // weather
    { viewValue: 'Flood', value: 'ITM-082', validFor: [ 'PCM-012' ] },
    { viewValue: 'Hail', value: 'ITM-085', validFor: [ 'PCM-012' ] },
    { viewValue: 'Storm', value: 'ITM-109', validFor: [ 'PCM-012' ] },
    // other
    { viewValue: 'Bogged on the beach', value: 'ITM-054', validFor: [ 'PCM-011' ] },
    { viewValue: 'Driving through water', value: 'ITM-080', validFor: [ 'PCM-011' ] },
    { viewValue: 'Chemical related', value: 'ITM-055', validFor: [ 'PCM-011' ] },
    { viewValue: 'Fuel related', value: 'ITM-083', validFor: [ 'PCM-011' ] },
    { viewValue: 'Wheel coming off vehicle', value: 'ITM-061', validFor: [ 'PCM-011' ] },
    { viewValue: 'Circumstances unclear', value: 'ITM-078', validFor: [ 'PCM-011' ] },
  ];
  primaryCauseControl = new FormControl();
  incidentLocationControl = new FormControl();
  responsiblePersonsControl = new FormControl();
  incidentTypeControl = new FormControl();

  get primaryCause(): string {
    const primaryCause = this.primaryCauseControl.value;
    return primaryCause;
  }
  get filteredIncidentTypes(): IncidentType[] {
    const filteredIncidentTypes = this.incidentTypes.filter(incidentType => {
      return incidentType.validFor.indexOf(this.primaryCause) >= 0;
    });
    return filteredIncidentTypes;
  }
  get showIncidentTypeQuestion(): boolean {
    if (!this.primaryCause) {
      return false;
    }
    const primaryCausesRequiringIncidentType = [
      'PCM-026', 'PCM-014', 'PCM-012', 'PCM-011'
    ];
    const shouldShowQuestion = primaryCausesRequiringIncidentType.indexOf(this.primaryCause) >= 0;
    if (!shouldShowQuestion) {
      this.form.removeControl('incidentType');
    } else {
      this.form.addControl('incidentType', this.incidentTypeControl);
    }
    return shouldShowQuestion;
  }
  get filteredResponsiblePersons(): ResponsiblePerson[] {
    if (!this.primaryCause) {
      return [];
    }
    const filteredResponsiblePersons = this.responsiblePersons.filter(responsiblePerson => {
      // return if selected primaryCause isn't on that should make it hidden
      return responsiblePerson.hideFor.indexOf(this.primaryCause) < 0;
    });
    return filteredResponsiblePersons;
  }

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      primaryCause: this.primaryCauseControl,
      incidentLocation: this.incidentLocationControl,
      responsiblePersons: this.responsiblePersonsControl,
      incidentType: this.incidentTypeControl,
    });
  }

  ngOnInit() {
    setTimeout(() => {
    this.parentForm.addControl('singleVehicle', this.form);
    });
  }
  ngOnDestroy() {
    this.parentForm.removeControl('singleVehicle');
  }

}
