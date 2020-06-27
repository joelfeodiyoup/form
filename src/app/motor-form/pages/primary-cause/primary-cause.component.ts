import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './primary-cause.component.html'
})
export class PrimaryCauseComponent {
  title = 'my-app';
  name = new FormControl('');
}
