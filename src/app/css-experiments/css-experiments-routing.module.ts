import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GridComponent } from './grid/grid.component';
import { BackgroundPatternComponent } from './background-pattern/background-pattern.component';
import { StripedBackgroundsComponent } from './striped-backgrounds/striped-backgrounds.component';

const cssExperimentsRoutes: Routes = [
    { path: 'css', redirectTo: 'css/grid'},
    { path: 'css/grid', component: GridComponent},
    { path: 'css/background-pattern', component: BackgroundPatternComponent},
    { path: 'css/striped-backgrounds', component: StripedBackgroundsComponent},
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