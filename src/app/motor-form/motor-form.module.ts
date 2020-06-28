
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { ConfirmationComponent } from './pages/confirmation/confirmation.component';
import { GettingStartedComponent } from './pages/getting-started/getting-started.component';
import { IncidentDetailsComponent } from './pages/incident-details/incident-details.component';
import { OtherPeopleComponent } from './pages/other-people/other-people.component';
import { PrimaryCauseComponent } from './pages/primary-cause/primary-cause.component';
import { SummaryComponent } from './pages/summary/summary.component';
import { FormStepperComponent } from './pages/form-stepper/form-stepper.component';

import { MotorFormRoutingModule } from './motor-form-routing.module';
import { AngularMaterialImportsModule } from '../angular-material-imports.module';
import { SingleVehiclePrimaryCauseComponent } from'./pages/primary-cause/single-vehicle-primary-cause/single-vehicle-primary-cause.component';
import { TwoVehiclesPrimaryCauseComponent } from './pages/primary-cause/two-vehicles-primary-cause/two-vehicles-primary-cause.component';
import { MultiplePrimaryCauseComponent } from './pages/primary-cause/multiple-primary-cause/multiple-primary-cause.component';
import { WindscreenPrimaryCauseComponent } from './pages/primary-cause/windscreen-primary-cause/windscreen-primary-cause.component';

@NgModule({
  imports: [
    ReactiveFormsModule,
    MotorFormRoutingModule,
    CommonModule,
    AngularMaterialImportsModule,
    FormsModule
  ],
  declarations: [
    ConfirmationComponent,
    GettingStartedComponent,
    IncidentDetailsComponent,
    OtherPeopleComponent,
    PrimaryCauseComponent,
    SummaryComponent,
    FormStepperComponent,
    SingleVehiclePrimaryCauseComponent,
    TwoVehiclesPrimaryCauseComponent,
    MultiplePrimaryCauseComponent,
    WindscreenPrimaryCauseComponent
  ]
})
export class MotorFormModule {}
