import { Component, OnInit, Input } from "@angular/core";
import { ControlContainer, NgModelGroup } from "@angular/forms";

@Component({
  selector: "date-time-place",
  templateUrl: "./date-time-place.component.html",
  viewProviders: [{ provide: ControlContainer, useExisting: NgModelGroup }]
})
export class DateTimePlaceComponent implements OnInit {
    @Input() group: string;
  model = {
  };
  ngOnInit() {}
}
