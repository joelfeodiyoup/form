import { Component, OnInit } from '@angular/core';
import { ControlContainer, NgModelGroup, NgForm } from '@angular/forms';

@Component({
    selector: 'other-people',
    templateUrl: './other-people.component.html',
    viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class OtherPeopleComponent implements OnInit {
    ngOnInit() {

    }
}