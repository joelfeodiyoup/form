import { Component, OnInit, Input } from '@angular/core';
import { ControlContainer, NgModelGroup, NgForm } from '@angular/forms';
import { Person } from 'src/app/template-form/services/interfaces';

@Component({
    selector: 'other-people',
    templateUrl: './other-people.component.html',
    viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class OtherPeopleComponent implements OnInit {
    readonly personDescription: { value: string; viewValue: string }[] = [
        { value: "Animal Owner", viewValue: "Animal Owner" },
        { value: "Offender or Other Responsible Party", viewValue: "Offender or Other Responsible Party" },
        { value: "Property Owner", viewValue: "Property Owner" },
        { value: "Pedestrian", viewValue: "Pedestrian" },
        { value: "Third Party Vehicle Driver / Owner", viewValue: "Third Party Vehicle Driver / Owner" },
        { value: "Unknown Third Party", viewValue: "Unknown Third Party" },
        { value: "Unknown Offender", viewValue: "Unknown Offender" },
      ];
    @Input() group: string;
    model: OtherPerson[] = [];
    isEditing = false;
    newItem: OtherPerson;
    ngOnInit() {}
  edit(i) {
    this.newItem = this.model[i];
    this.remove(i);
    this.isEditing = true;
  }
  addNewItem() {
    // this.model.push(emptyItem);
    this.newItem = <OtherPerson>{};
    this.isEditing = true;
  }
  save() {
    this.model.push(this.newItem);
    this.isEditing = false;
  }
  moveItemToTop(index: number) {
    const from = index;
    const to = this.model.length - 1;
    this.model.splice(to, 0, this.model.splice(from, 1)[0]);
  }
  remove(i) {
    this.model.splice(i, 1);
  }
  cancel() {
    this.newItem = <OtherPerson>{};
    this.isEditing = false;
  }
}
interface OtherPerson {
    Person: Person,
    type: string
}