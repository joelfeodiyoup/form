import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { FormService } from './services/form.service';
import { NgForm } from '@angular/forms';
import { MatHorizontalStepper } from '@angular/material/stepper';

@Component({
    selector: 'app-root',
    templateUrl: './template-form.component.html',
    styles: [`
    :host {
        display: flex;
    }
    .stepper-buttons {
        padding-top:2rem;
        margin-top: auto;
        float: right;
        align-self: flex-end;
    }
    mat-step {
        display: flex;
        flex-direction: column;
    }
    .save-and-progress {
        display: flex;
        flex-direction: row;
    }
    `,
    ]
})
export class TemplateFormComponent implements OnInit, AfterViewInit {
    @ViewChild('form') public form: NgForm;
    @ViewChild('stepper') public stepper: MatHorizontalStepper;
    model;
    isLinear = false;
    constructor(
        private formService: FormService
    ) {
        this.model = this.formService.model;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.formService.form = this.form;
    }
    canProceed(child?:string): boolean {
        
        // (skip all validation)
        // return true;

        // if there's no child form, then nothing to validate. So can proceed
        if (!child) {
            return true;
        }

        // if the form hasn't been initialised, something is really wrong. they can't proceed.
        if (!this.form) {
            return false;
        }

        const form = this.form.controls[child];


        if (form.invalid || form.untouched) {
            return false;
        }
        return true;
    }
    test() {
        console.log('testing');
    }
    get steps(): any {
        return [
            'primary cause',
            'incident details',
            'other people involved',
            'police report',
            'summary'
        ];
    }
    get stepIndex(): number {
        if (!this.stepper) {
            return 0;
        }
        return this.stepper.selectedIndex;
    }
    validate(child: string) {
        this.form.controls[child].updateValueAndValidity();
    }
    get progress(): number {
        if (!this.stepper) {
            return 0;
        }
        return this.stepper.selectedIndex / (this.stepper.steps.length - 1) * 100;
    }
}