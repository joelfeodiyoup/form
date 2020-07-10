import { FormService } from 'src/app/template-form/services/form.service';
import { Component, OnInit } from '@angular/core';
import { ControlContainer, NgForm, NgModelGroup } from '@angular/forms';
import { QuestionsPrimaryCauseTwoVehiclesService } from 'src/app/template-form/services/questions-primary-cause-two-vehicles.service';

@Component({
    selector: 'two-vehicle-primary-cause',
    templateUrl: './two-vehicle-primary-cause.component.html',
    viewProviders: [{ provide: ControlContainer, useExisting: NgModelGroup }]
})
export class TwoVehiclePrimaryCauseComponent implements OnInit {
    model = {
        primaryCause: '',
        incidentLocation: '',
        responsiblePerson: ''
    };
    incidentLocations: any;
    primaryCauses: any;
    responsiblePersons: any;
    constructor(
        private questionsService: QuestionsPrimaryCauseTwoVehiclesService,
    ) {
    }
    ngOnInit() {
        this.setQuestions();
    }
    onFormChange() {
        this.setQuestions();
    }
    setQuestions() {
        this.primaryCauses = this.questionsService.primaryCauses(this.model.incidentLocation);
        this.incidentLocations = this.questionsService.incidentLocations();
        this.responsiblePersons = this.questionsService.responsiblePersons(this.model.incidentLocation);
    }

}