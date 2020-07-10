import { Injectable } from "@angular/core";
import { ConfigurationSelectOption, SelectOption } from './interfaces';
import { QuestionsUtilsService } from './questions-utils.service';

@Injectable({
    providedIn: 'root'
})
export class QuestionsPrimaryCauseTwoVehiclesService {
    constructor(private utils: QuestionsUtilsService) {}
    private readonly _incidentLocations: ConfigurationSelectOption[] = [
        { viewValue: 'Carpark', value: 'CP' },
        { viewValue: 'Driveway', value: 'DW' },
        { viewValue: 'Road', value: 'RD' },
        { viewValue: 'Intersection with traffic lights', value: 'ITL' },
        { viewValue: 'Intersection without traffic lights', value: 'INTL' },
        { viewValue: 'Roundabout', value: 'RND' },
        { viewValue: 'T-intersection', value: 'TJ' },
        { viewValue: 'None of the above', value: 'OTH' },
      ];
      private readonly _primaryCauses: ConfigurationSelectOption[] = [
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
        // intersection with traffic lights
        { viewValue: 'Collision', value: 'PCM-041', validFor: ['ITL'] },
        // intersection without traffic lights
        { viewValue: 'It involved a controlled t-intersection (stop/give-way sign or road markings)', value: 'PCM-039', validFor: ['INTL'] },
        { viewValue: 'It involved an uncontrolled t-intersection (no signs or road markings)', value: 'PCM-040', validFor: ['INTL'] },
        { viewValue: 'Turning into oncoming traffic', value: 'PCM-042', validFor: ['INTL'] },
        { viewValue: 'Both vehicles were turning', value: 'PCM-021', validFor: ['INTL'] },
        { viewValue: 'Both parties were entering intersection', value: 'PCM-020', validFor: ['INTL'] },
        // t intersection
        { viewValue: 'Collision', value: 'PCM-041', validFor: ['TJ'] },
        // none of these
        { viewValue: 'Other', value: 'PCM-011', validFor: ['OTH'] },
      ];
      private readonly _responsiblePersons: ConfigurationSelectOption[] = [
        { viewValue: 'The driver of my vehicle', value: 'myvehicle', hideFor: ['PCM-009'] },
        { viewValue: 'Another person was responsible', value: 'othervehicle', hideFor: ['PCM-028', 'PCM-029'] },
      ];
      incidentLocations(): SelectOption[] {
          return this.utils.toViewOptions(this._incidentLocations);
      }
      primaryCauses(location: string): SelectOption[] {
          const filtered = this.utils.filter(location, this._primaryCauses);
          const viewOptions = this.utils.toViewOptions(filtered);
          return viewOptions;
      }
      responsiblePersons(location: string): SelectOption[] {
          const filtered = this.utils.filter(location, this._responsiblePersons);
          const viewOptions = this.utils.toViewOptions(filtered);
          return viewOptions;
      }

}