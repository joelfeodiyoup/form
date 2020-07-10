import { Component, OnInit } from '@angular/core';
import { ControlContainer, NgModelGroup, NgForm } from '@angular/forms';

@Component({
    selector: 'datetime',
    templateUrl: './datetime.component.html',
    viewProviders: [{ provide: ControlContainer, useExisting: NgModelGroup }],
    styles: [`
    :host {
        margin-bottom: 2rem;
    }`]
})
export class DatetimeComponent implements OnInit {
    model = {
        date: '',
        time: ''
    };
    ngOnInit() {

    }
}