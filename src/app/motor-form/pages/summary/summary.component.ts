import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './summary.component.html'
})
export class SummaryComponent {
  title = 'my-app';
  name = new FormControl('');
}
