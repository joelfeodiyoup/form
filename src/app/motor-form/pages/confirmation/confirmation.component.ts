import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './confirmation.component.html'
})
export class ConfirmationComponent {
  title = 'my-app';
  name = new FormControl('');
}
