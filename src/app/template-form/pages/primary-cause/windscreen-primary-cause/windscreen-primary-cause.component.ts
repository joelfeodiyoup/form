import { ControlContainer, NgModelGroup } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { QuestionsWindscreenService } from 'src/app/template-form/services/questions-windscreen.service';
import { SelectOption } from 'src/app/template-form/services/interfaces';

@Component({
    selector: 'windscreen-primary-cause',
    templateUrl: './windscreen-primary-cause.component.html',
    viewProviders: [{ provide: ControlContainer, useExisting: NgModelGroup }]
})
export class WindscreenPrimaryCauseComponent implements OnInit {
    @ViewChild('form') public userFrm: NgModelGroup;
    model = {
        hasBeenRepairedOrReplaced: '',
        incidentLocation: '',
        claimedAmount: '',
        primaryCause: 'PCM-016',
    };
    incidentLocations: SelectOption[];
    constructor(private questionsService: QuestionsWindscreenService) {
    }
    get hasBeenRepaired(): boolean {
        return this.model.hasBeenRepairedOrReplaced === 'true';
    }
    get hasNotBeenRepaired(): boolean {
        return this.model.hasBeenRepairedOrReplaced === 'false';
    }
    ngOnInit() {
        this.setQuestions();
    }
    onFormChange() {
        this.setQuestions();
    }
    setQuestions() {
        this.incidentLocations = this.questionsService.incidentLocations();
    }
    test() {
        console.log('testing');
    }
}