import { ControlContainer, NgModelGroup } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
    selector: 'multiple-vehicle-primary-cause',
    templateUrl: './multiple-vehicle-primary-cause.component.html',
    viewProviders: [{ provide: ControlContainer, useExisting: NgModelGroup }]
})
export class MultipleVehiclePrimaryCauseComponent {
}