import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

interface IncidentLocation {
  value: string;
  viewValue: string;
}
interface PrimaryCause {
  value: string;
  viewValue: string;
  validFor?: any;
}

@Component({
  selector: 'app-two-vehicles-primary-cause',
  templateUrl: './two-vehicles-primary-cause.component.html'
})
export class TwoVehiclesPrimaryCauseComponent {
  form: FormGroup;
  incidentLocations: IncidentLocation[] = [
    { viewValue: 'Carpark', value: 'CP' },
    { viewValue: 'Driveway', value: 'DW' },
    { viewValue: 'Road', value: 'RD' },
    { viewValue: 'Intersection with traffic lights', value: 'ITL' },
    { viewValue: 'Intersection without traffic lights', value: 'INTL' },
    { viewValue: 'Roundabout', value: 'RND' },
    { viewValue: 'T-intersection', value: 'TJ' },
    { viewValue: 'None of the above', value: 'OTH' },
  ];
  primaryCauses: PrimaryCause[] = [
    // carpark
    { viewValue: 'Damage while parked', value: 'PCM-023', validFor: ['CP'] },
    { viewValue: 'Car door opened into traffic', value: 'PCM-022', validFor: ['CP'] },
    { viewValue: 'Lost control', value: 'PCM-033', validFor: ['CP'] },
    { viewValue: 'Reversing', value: 'PCM-037', validFor: ['CP'] },
    { viewValue: 'Head on collision', value: 'PCM-027', validFor: ['CP'] },
    // driveway
    { viewValue: 'Reversing', value: 'PCM-037', validFor: ['DW'] },
    { viewValue: 'Damage while parked', value: 'PCM-028', validFor: ['DW'] },
    // road
    { viewValue: 'Changed lanes', value: 'PCM-032', validFor: ['RD'] },
    { viewValue: 'Merging', value: 'PCM-034', validFor: ['RD'] },
    { viewValue: 'Pulling away from kerb', value: 'PCM-036', validFor: ['RD'] },
    { viewValue: 'Lost control', value: 'PCM-033', validFor: ['RD'] },
    { viewValue: 'Overtaking', value: 'PCM-035', validFor: ['RD'] },
    { viewValue: 'Hit in rear', value: 'PCM-030', validFor: ['RD'] },
    { viewValue: 'Reversing', value: 'PCM-037', validFor: ['RD'] },
    { viewValue: 'Head on collision', value: 'PCM-027', validFor: ['RD'] },
    { viewValue: 'Car door opened into traffic', value: 'PCM-022', validFor: ['RD'] },
    { viewValue: 'U-turn, in the face of oncoming traffic', value: 'PCM-043', validFor: ['RD'] },
    { viewValue: 'U-turn, both vehicles travelling in the same direction', value: 'PCM-044', validFor: ['RD'] },
    { viewValue: 'Damaged while parked', value: 'PCM-023', validFor: ['RD'] },
    { viewValue: 'Damaged in transit', value: 'PCM-024', validFor: ['RD'] },
    { viewValue: 'Falling load', value: 'PCM-025', validFor: ['RD'] },
    // roundabout
    { viewValue: 'Collision', value: 'PCM-038', validFor: ['RND'] },
    // transit
    { viewValue: 'Damage while being transported', value: 'PCM-038', validFor: ['RND'] },
    // other
  ];
  incidentLocationControl = new FormControl();
  primaryCauseControl = new FormControl();
  constructor() {
    this.form = new FormGroup({
      IncidentLocation: this.incidentLocationControl,
      primaryCause: this.primaryCauseControl
    });
  }
}
