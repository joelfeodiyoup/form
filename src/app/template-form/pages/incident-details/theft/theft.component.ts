import { Component, OnInit, Input } from "@angular/core";
import { ControlContainer, NgModelGroup } from "@angular/forms";

@Component({
  selector: "theft",
  templateUrl: "./theft.component.html",
  viewProviders: [{ provide: ControlContainer, useExisting: NgModelGroup }]
})
export class TheftComponent implements OnInit {

    // from API:
    private readonly listedDrivers = [
        {value: '1111', viewValue: 'Listed driver 1 - DOB - main driver'},
        {value: '2222', viewValue: 'Listed driver 2 - DOB - main driver'},
        {value: '3333', viewValue: 'Listed driver 3 - DOB - main driver'},
        {value: '4444', viewValue: 'Listed driver 4 - DOB - main driver'},
    ];
    private readonly unlistedDriver = {value: '0000', viewValue: 'Other non-listed driver'};
    driversOptions: any;

    @Input() group: string;
  model = {
      driver: ''
  };
  ngOnInit() {
      this.driversOptions = this.listedDrivers.concat(this.unlistedDriver);
  }

  get isUnlistedDriver(): boolean {
      return this.model.driver === this.unlistedDriver.value;
  }
}
