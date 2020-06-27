import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './incident-details.component.html'
})
export class IncidentDetailsComponent {
  title = 'my-app';
  name = new FormControl('');
}
