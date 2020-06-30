import { NgModule } from '@angular/core';
import { CssExperimentsRoutingModule } from './css-experiments-routing.module';
import { GridComponent } from './grid/grid.component';
import { StripedBackgroundsComponent } from './striped-backgrounds/striped-backgrounds.component';

@NgModule({
    imports: [
        CssExperimentsRoutingModule
    ],
    declarations: [
        GridComponent,
        StripedBackgroundsComponent
    ]
})
export class CssExperimentsModule {}