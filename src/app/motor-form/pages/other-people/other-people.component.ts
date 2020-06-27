import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './other-people.component.html'
})
export class OtherPeopleComponent {
  title = 'my-app';
  name = new FormControl('');
}
