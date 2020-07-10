import { Component, OnInit, Input } from '@angular/core';
import { ControlContainer, NgModelGroup, NgForm } from '@angular/forms';

@Component({
    selector: 'incident-details',
    templateUrl: './incident-details.component.html',
    viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class IncidentDetailsComponent implements OnInit {
    @Input() group: string;
    model = {
        taxStatus: ''
    }
    ngOnInit() {

    }
}