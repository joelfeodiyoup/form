import { NgModule } from '@angular/core';
import { CssExperimentsRoutingModule } from './css-experiments-routing.module';
import { GridComponent } from './grid/grid.component';

@NgModule({
    imports: [
        CssExperimentsRoutingModule
    ],
    declarations: [
        GridComponent
    ]
})
export class CssExperimentsModule {}