import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm, NgModelGroup } from '@angular/forms';

@Component({
    selector: 'address',
    templateUrl: './address.component.html',
    viewProviders: [ { provide: ControlContainer, useExisting: NgModelGroup}]
})
export class AddressComponent {
    @Input() group: string;
    model = {
        manuallyEntered: false,
        line1:'',
        line2:''
    }
}