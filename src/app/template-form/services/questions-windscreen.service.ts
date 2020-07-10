import { QuestionsUtilsService } from './questions-utils.service';
import { Injectable } from '@angular/core';
import { ConfigurationSelectOption, SelectOption } from './interfaces';

@Injectable({
    providedIn: 'root'
})
export class QuestionsWindscreenService {
    constructor(private utils: QuestionsUtilsService) {}
    private readonly _incidentLocations: ConfigurationSelectOption[] = [
        { viewValue: 'Carpark', value: 'CP' },
        { viewValue: 'Driveway', value: 'DW' },
        { viewValue: 'Road', value: 'RD' },
        { viewValue: 'Other', value: 'OTH' },
    ];
    incidentLocations(): SelectOption[] {
        return this.utils.toViewOptions(this._incidentLocations);
    }
}