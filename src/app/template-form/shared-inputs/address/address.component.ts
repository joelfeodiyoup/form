import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm, NgModelGroup } from '@angular/forms';
import { FormService } from '../../services/form.service';

@Component({
    selector: 'address',
    templateUrl: './address.component.html',
    viewProviders: [ { provide: ControlContainer, useExisting: NgModelGroup}]
})
export class AddressComponent {
    @Input() group: string;
}