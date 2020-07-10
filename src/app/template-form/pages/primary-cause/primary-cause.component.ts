import { Component, Input } from "@angular/core";
import { ControlContainer, NgForm } from "@angular/forms";
import { FormService } from "../../services/form.service";

@Component({
  selector: "page-primary-cause",
  templateUrl: "./primary-cause.component.html",
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class PrimaryCauseComponent {
@Input() group: string;
  model = {
      claimType: ''
  }
  constructor(
    private formService: FormService
  ) {
    // this.model = this.formService.model;
  }
  get isSingle(): boolean {
      return this.model.claimType === 'singleVehicle';
  }
  get isTwoVehicles(): boolean {
      return this.model.claimType === 'twoVehicles';
  }
  get isMultipleVehicles(): boolean {
      return this.model.claimType === 'multipleVehicles';
  }
  get isWindscreen(): boolean {
      return this.model.claimType === 'windscreen';
  }
}
