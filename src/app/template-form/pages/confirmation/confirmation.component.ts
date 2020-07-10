import { Component, OnInit } from '@angular/core';
import { ControlContainer, NgModelGroup, NgForm } from '@angular/forms';

@Component({
    selector: 'confirmation',
    templateUrl: './confirmation.component.html',
    viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class ConfirmationComponent implements OnInit {
    ngOnInit() {

    }
}