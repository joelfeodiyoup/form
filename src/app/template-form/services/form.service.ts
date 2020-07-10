import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';

@Injectable({
    providedIn: 'root',
})
export class FormService {
    constructor() {}
    model: any = {};
    private _form: NgForm;

    // private readonly _form = new BehaviorSubject<Form>(null);
    // readonly form$ = this._form.asObservable();
    get form(): NgForm {
        return this._form;
    }
    set form(val: NgForm) {
        // this._form.next(val);
        this._form = val;
    }
    // initialiseModel() {
    //     this.model.claimType = '';
    // }
}
class Form {
    claimType?: string
}