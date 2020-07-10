import { NgModule } from '@angular/core';
import { TemplateFormComponent } from './template-form.component';
import { TemplateFormRoutingModule } from './template-form-routing.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AddressComponent } from './shared-inputs/address/address.component';
import { AngularMaterialImportsModule } from '../angular-material-imports.module';
import { PrimaryCauseComponent } from './pages/primary-cause/primary-cause.component';
import { ClaimTypeComponent } from './shared-inputs/claim-type/claim-type.component';
import { SingleVehiclePrimaryCauseComponent } from './pages/primary-cause/single-vehicle-primary-cause/single-vehicle-primary-cause.component';
import { TwoVehiclePrimaryCauseComponent } from './pages/primary-cause/two-vehicle-primary-cause/two-vehicle-primary-cause.component';
import { MultipleVehiclePrimaryCauseComponent } from './pages/primary-cause/multiple-vehicle-primary-cause/multiple-vehicle-primary-cause.component';
import { WindscreenPrimaryCauseComponent } from './pages/primary-cause/windscreen-primary-cause/windscreen-primary-cause.component';
import { IncidentDetailsComponent } from './pages/incident-details/incident-details.component';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { DatetimeComponent } from './shared-inputs/datetime/datetime.component';
import { GstComponent } from './shared-inputs/gst/gst.component';
import { GettingStartedComponent } from './pages/getting-started/getting-started.component';
import { SaveComponent } from './shared-inputs/save/save.component';
import { SummaryComponent } from './pages/summary/summary.component';
import { TheftComponent } from './pages/incident-details/theft/theft.component';
import { PersonComponent } from './shared-inputs/person/person.component';
import { DateTimePlaceComponent } from './pages/incident-details/date-time-place/date-time-place.component';
import { DamagedItemsComponent } from './pages/incident-details/damaged-items/damaged-items.component';
import { PeopleInvolvedComponent } from './pages/people-involved/people-involved.component';
import { OtherPeopleComponent } from './pages/people-involved/other-people/other-people.component';
import { PoliceReportComponent } from './pages/people-involved/police-report/police-report.component';
import { ConfirmationComponent } from './pages/confirmation/confirmation.component';

@NgModule({
    imports: [
        TemplateFormRoutingModule,
        FormsModule,
        CommonModule,
        AngularMaterialImportsModule,
        NgxMaterialTimepickerModule
    ],
    declarations: [
        TemplateFormComponent,
        AddressComponent,
        PrimaryCauseComponent,
        ClaimTypeComponent,
        SingleVehiclePrimaryCauseComponent,
        TwoVehiclePrimaryCauseComponent,
        MultipleVehiclePrimaryCauseComponent,
        WindscreenPrimaryCauseComponent,
        IncidentDetailsComponent,
        DatetimeComponent,
        PeopleInvolvedComponent,
        GstComponent,
        GettingStartedComponent,
        SaveComponent,
        SummaryComponent,
        TheftComponent,
        PersonComponent,
        DateTimePlaceComponent,
        DamagedItemsComponent,
        OtherPeopleComponent,
        PoliceReportComponent,
        ConfirmationComponent
    ],
})
export class TemplateFormModule {}