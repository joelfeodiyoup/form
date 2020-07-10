import { TemplateFormComponent } from './template-form.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const templateFormRoutes: Routes = [
    {path: 'template-form', component: TemplateFormComponent}
]
@NgModule({
    imports: [
        RouterModule.forChild(templateFormRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class TemplateFormRoutingModule {}