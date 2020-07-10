import { FormService } from 'src/app/template-form/services/form.service';
import { Component, OnInit } from '@angular/core';
import { ControlContainer, NgForm, NgModelGroup, FormGroupDirective, FormControl } from '@angular/forms';
import { QuestionsPrimaryCauseSingleVehicleService } from 'src/app/template-form/services/questions-primary-cause-single-vehicle.service';

@Component({
    selector: 'single-vehicle-primary-cause',
    templateUrl: './single-vehicle-primary-cause.component.html',
    viewProviders: [{ provide: ControlContainer, useExisting: NgModelGroup }]
})
export class SingleVehiclePrimaryCauseComponent implements OnInit {
    model = {
        primaryCause: '',
        incidentType: '',
        incidentLocation: '',
        responsiblePerson: ''
    };
    constructor(
        private questionsService: QuestionsPrimaryCauseSingleVehicleService,
    ) {
    }
    primaryCauses: any;
    incidentTypes: any;
    incidentLocations: any;
    responsiblePersons: any;

    ngOnInit() {
        this.setQuestions();
    }

    onFormChange() {
        this.setQuestions();
    }

    setQuestions() {
        this.primaryCauses = this.getPrimaryCauses();
        this.incidentTypes = this.getIncidentTypes();
        this.incidentLocations = this.getIncidentLocations();
        this.responsiblePersons = this.getResponsiblePersons();
    }

  // update from 'any'
  getPrimaryCauses(): any {
    // add dynamics for single / two / multiple / windscreen
    console.log('primaryCauses');
    return this.questionsService.primaryCauses();
  }
  get showIncidentTypeQuestion(): boolean {
    const primaryCausesRequiringIncidentType = [
      "PCM-026",
      "PCM-014",
      "PCM-012",
      "PCM-011"
    ];
    const show = primaryCausesRequiringIncidentType.indexOf(this.model.primaryCause) >= 0;
    return show;
  }
  getIncidentTypes(): any {
      return this.questionsService.incidentTypes(this.model.primaryCause);
  }
  getIncidentLocations(): any {
      return this.questionsService.incidentLocations();
  }
  getResponsiblePersons(): any {
      return this.questionsService.responsiblePersons(this.model.primaryCause);
  }
}