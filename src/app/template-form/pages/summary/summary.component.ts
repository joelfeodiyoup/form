import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { ControlContainer, NgModelGroup, NgForm } from '@angular/forms';
import { FormService } from '../../services/form.service';

@Component({
    selector: 'summary',
    templateUrl: './summary.component.html',
    viewProviders: [{ provide: ControlContainer, useExisting: NgModelGroup }],
    styles: [`
    :host {
        margin-bottom: 2rem;
    }`]
})
export class SummaryComponent {
    @Input('form') form: NgForm;
    model = {
        primaryCause: {
            claimType: '',
            primaryCause: '',
            incidentType: '',
            incidentLocation: ''
        },
        incidentDetails: {
            incidentDate: '',
            incidentTime: '',

        },
        policReport: {
            didPoliceAttend: '',
            anyoneCharged: '',
        }
    };
    initModel() {

    }
    test() {
        console.log('tesitng');
    }
    get primaryCause(): any {
        if (this.form && this.form.value && this.form.value.primaryCause && this.form.value.primaryCause.claimType) {
            const claimType = this.form.value.primaryCause.claimType;
            const primaryCause = this.form.value.primaryCause[claimType];
            return {
                claimType: claimType,
                primaryCause: primaryCause.primaryCause,
                incidentType: primaryCause.incidentType,
                incidentLocation: primaryCause.incidentLocation
            }
        } else {
            return this.model.primaryCause;
        }        
    }
    get incidentDetails(): any {
        return this.model.incidentDetails;
    }
    get otherPeople(): any {
        return this.model.policReport;
    }
}