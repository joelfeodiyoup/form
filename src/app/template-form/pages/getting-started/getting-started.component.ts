import { Component, OnInit } from '@angular/core';
import { ControlContainer, NgModelGroup, NgForm } from '@angular/forms';

@Component({
    selector: 'getting-started',
    templateUrl: './getting-started.component.html',
    viewProviders: [{ provide: ControlContainer, useExisting: NgModelGroup }],
})
export class GettingStartedComponent implements OnInit {
    applicant: any;
    ngOnInit() {
        this.applicant = [
            {
              label: 'Policy type', value: 'Comprehensive'
            },
            {
              label: 'Registration Number', value: 'S100 BOG'
            },
            {
              label: 'Vehicle', value: 'Corolla Sedan'
            },
            {
              label: 'Name', value: 'Celine Hodgeson'
            },
            {
              label: 'Phone number', value: '0412 345 678'
            },
            {
              label: 'Email', value: 'celine.hodgeson@gmail.com'
            }
          ];
    }
}