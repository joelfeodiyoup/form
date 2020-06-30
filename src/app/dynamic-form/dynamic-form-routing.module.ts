import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DynamicFormComponent } from './dynamic-form.component';

const dynamicFormRoutes: Routes = [
  {path: 'dynamic-form', component: DynamicFormComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(dynamicFormRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class DynamicFormRoutingModule {}
