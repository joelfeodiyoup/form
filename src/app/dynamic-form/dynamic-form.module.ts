import { NgModule } from '@angular/core';
import { DynamicFormComponent } from './dynamic-form.component';
import { DynamicFormRoutingModule } from './dynamic-form-routing.module';

@NgModule({
  imports: [
    DynamicFormRoutingModule
  ],
  declarations: [
    DynamicFormComponent
  ]
})
export class DynamicFormModule {}
