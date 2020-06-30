import { DynamicComponentModule } from "./dynamic-component/dynamic-component.module";
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { angularExperimentsRoutingModule } from './angular-experiments-routing.module';

@NgModule({
    imports: [
        DynamicComponentModule,
        angularExperimentsRoutingModule
    ],
    declarations: [
        AppComponent
    ]
})
export class AngularExperimentsModule {}