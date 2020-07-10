import { Component, OnInit, Input } from "@angular/core";
import { ControlContainer, NgModelGroup } from "@angular/forms";

@Component({
  selector: "damaged-items",
  templateUrl: "./damaged-items.component.html",
  viewProviders: [{ provide: ControlContainer, useExisting: NgModelGroup }],
  styles: [`
    .edit-item {
        background-color: white;
        padding: 1rem;
        border: 1px solid black;
        border-radius: 0.25rem;
    }
  `
  ]
})
export class DamagedItemsComponent implements OnInit {
  @Input() group: string;
  model: Item[] = [];
  isEditing = false;
  newItem: Item;
  private readonly emptyItem: Item = {
    type: "",
    description: "",
    replaced: "",
    amount: ""
  };

  // from an API
  readonly itemTypes: { value: string; viewValue: string }[] = [
    { value: "BabySeats", viewValue: "Baby Seats" },
    { value: "Emergency Repairs", viewValue: "Emergency Repairs" },
    {
      value: "Emergency Travel/Accommodation",
      viewValue: "Emergency Travel/Accommodation"
    },
    { value: "Hire Car Costs", viewValue: "Hire Car Costs" },
    { value: "Locks and Keys", viewValue: "Locks and Keys" },
    { value: "Personal Items", viewValue: "Personal Items" },
    { value: "Replacement Windscreen", viewValue: "Replacement Windscreen" },
    { value: "Taxi Home", viewValue: "Taxi Home" },
    { value: "Trailer", viewValue: "Trailer" },
    { value: "Windscreen Repair", viewValue: "Windscreen Repair" }
  ];
  ngOnInit() {}
  edit(i) {
    this.newItem = this.model[i];
    this.remove(i);
    this.isEditing = true;
  }
  addNewItem() {
    // this.model.push(emptyItem);
    this.newItem = {
      type: "",
      description: "",
      replaced: "",
      amount: ""
    };
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
    this.newItem = this.emptyItem;
    this.isEditing = false;
  }
}
interface Item {
  type: string;
  description: string;
  replaced: string;
  amount: string;
}
