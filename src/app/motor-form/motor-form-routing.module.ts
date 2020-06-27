import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmationComponent } from './pages/confirmation/confirmation.component';
import { GettingStartedComponent } from './pages/getting-started/getting-started.component';
import { IncidentDetailsComponent } from './pages/incident-details/incident-details.component';
import { OtherPeopleComponent } from './pages/other-people/other-people.component';
import { PrimaryCauseComponent } from './pages/primary-cause/primary-cause.component';
import { SummaryComponent } from './pages/summary/summary.component';

// keep this in order because the stepper relies on it
const motorFormRoutes: Routes = [
  { path: 'Form', component: GettingStartedComponent },
  { path: 'motor-claim/getting-started', component: GettingStartedComponent },
  { path: 'motor-claim/primary-cause', component: PrimaryCauseComponent },
  { path: 'motor-claim/incident-details', component: IncidentDetailsComponent },
  { path: 'motor-claim/other-people', component: OtherPeopleComponent },
  { path: 'motor-claim/summary', component: SummaryComponent },
  { path: 'motor-claim/confirmation', component: ConfirmationComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(motorFormRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MotorFormRoutingModule {}
