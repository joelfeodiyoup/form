import { Component, Input } from '@angular/core';
import { ControlContainer, NgModelGroup } from '@angular/forms';

@Component({
    selector: 'police-report',
    templateUrl: './police-report.component.html',
    viewProviders: [ { provide: ControlContainer, useExisting: NgModelGroup}]
})
export class PoliceReportComponent {
    @Input() group: string;
    model = {
        policeAttended: '',
        breathTestConducted: '',
        bloodAlcohol: '',
        hasReported: '',
        reportNumber: '',
        anyoneCharged: '',
        chargeDetails: '',
    }
}