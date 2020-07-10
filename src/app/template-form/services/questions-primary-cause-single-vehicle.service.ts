import { Injectable } from '@angular/core';
import { ConfigurationSelectOption, SelectOption } from './interfaces';
import { QuestionsUtilsService } from './questions-utils.service';
  
@Injectable({
    providedIn: 'root',
})
export class QuestionsPrimaryCauseSingleVehicleService {
    constructor(private utils: QuestionsUtilsService) {}
    private readonly _primaryCauses: ConfigurationSelectOption[] = [
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
    private readonly _incidentLocations: ConfigurationSelectOption[] = [
      { viewValue: 'Carpark', value: 'CP' },
      { viewValue: 'Driveway', value: 'DW' },
      { viewValue: 'Road', value: 'RD' },
      { viewValue: 'Other', value: 'OTH' },
    ];
    private readonly _responsiblePersons: ConfigurationSelectOption[] = [
      { viewValue: 'The driver of my vehicle', value: 'myvehicle', hideFor: ['PCM-009'] },
      { viewValue: 'Another person was responsible', value: 'othervehicle', hideFor: ['PCM-028', 'PCM-029'] },
    ];
    private readonly _incidentTypes: ConfigurationSelectOption[] = [
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
    primaryCauses(): SelectOption[] {
      return this.utils.toViewOptions(this._primaryCauses);
    }
    responsiblePersons(primaryCause: string): SelectOption[] {
      const filtered = this.utils.filter(primaryCause, this._responsiblePersons);
      const viewOptions = this.utils.toViewOptions(filtered);
      return viewOptions;
    }
    incidentTypes(primaryCause: string): SelectOption[] {
      const filtered = this.utils.filter(primaryCause, this._incidentTypes);
      const viewOptions = this.utils.toViewOptions(filtered);
      return viewOptions;
    }
    incidentLocations(): SelectOption[] {
      return this.utils.toViewOptions(this._incidentLocations);
    }
}