import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GridComponent } from './grid/grid.component';

const cssExperimentsRoutes: Routes = [
    { path: 'css', redirectTo: 'css/grid'},
    { path: 'css/grid', component: GridComponent}

];

@NgModule({
    imports: [
        RouterModule.forChild(cssExperimentsRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class CssExperimentsRoutingModule {}