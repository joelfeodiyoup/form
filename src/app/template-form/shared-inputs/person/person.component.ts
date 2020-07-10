import { Component, OnInit, Input } from "@angular/core";
import { ControlContainer, NgModelGroup } from "@angular/forms";

@Component({
  selector: "person",
  templateUrl: "./person.component.html",
  viewProviders: [{ provide: ControlContainer, useExisting: NgModelGroup }]
})
export class PersonComponent implements OnInit {
    @Input() group: string;
  model = {
  };
  ngOnInit() {}
}
