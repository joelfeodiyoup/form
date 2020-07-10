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
import { OtherPeopleComponent } from './pages/other-people/other-people.component';
import { GstComponent } from './shared-inputs/gst/gst.component';
import { GettingStartedComponent } from './pages/getting-started/getting-started.component';
import { SaveComponent } from './shared-inputs/save/save.component';
import { SummaryComponent } from './pages/summary/summary.component';

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
        OtherPeopleComponent,
        GstComponent,
        GettingStartedComponent,
        SaveComponent,
        SummaryComponent
    ],
})
export class TemplateFormModule {}