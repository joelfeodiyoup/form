import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const angularExperimentsRoutes: Routes = [
    { path: 'angular-experiments', component: AppComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(angularExperimentsRoutes),
    ],
    exports: [
        RouterModule
    ],
})
export class angularExperimentsRoutingModule {}