import { Component, OnInit } from "@angular/core";
import { ControlContainer, NgModelGroup } from "@angular/forms";

@Component({
  selector: "gst",
  templateUrl: "./gst.component.html",
  viewProviders: [{ provide: ControlContainer, useExisting: NgModelGroup }]
})
export class GstComponent implements OnInit {
  model = {
    companyNumber: "",
    taxCreditPercentage: "",
    taxStatus: ""
  };
  ngOnInit() {}
  get showTaxStatus(): boolean {
      return this.model.taxStatus === 'true';
  }
}
