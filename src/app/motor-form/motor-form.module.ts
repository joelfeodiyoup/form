
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';
import { ConfirmationComponent } from './pages/confirmation/confirmation.component';
import { GettingStartedComponent } from './pages/getting-started/getting-started.component';
import { IncidentDetailsComponent } from './pages/incident-details/incident-details.component';
import { OtherPeopleComponent } from './pages/other-people/other-people.component';
import { PrimaryCauseComponent } from './pages/primary-cause/primary-cause.component';
import { SummaryComponent } from './pages/summary/summary.component';
import { FormStepperComponent } from './pages/form-stepper/form-stepper.component';

import { MotorFormRoutingModule } from './motor-form-routing.module';

@NgModule({
  imports: [
    ReactiveFormsModule,
    MotorFormRoutingModule,
    CommonModule
  ],
  declarations: [
    ConfirmationComponent,
    GettingStartedComponent,
    IncidentDetailsComponent,
    OtherPeopleComponent,
    PrimaryCauseComponent,
    SummaryComponent,
    FormStepperComponent
  ]
})
export class MotorFormModule {}
