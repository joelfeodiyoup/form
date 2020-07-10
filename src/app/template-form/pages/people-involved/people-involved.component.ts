import { Component, OnInit } from '@angular/core';
import { ControlContainer, NgModelGroup, NgForm } from '@angular/forms';

@Component({
    selector: 'people-involved',
    templateUrl: './people-involved.component.html',
    viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class PeopleInvolvedComponent implements OnInit {
    ngOnInit() {

    }
}