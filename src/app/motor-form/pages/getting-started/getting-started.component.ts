import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-getting-started',
  templateUrl: './getting-started.component.html'
})
export class GettingStartedComponent implements OnInit {
  public applicant: any;
  stuff = ['hello', 'stuff'];
  something = 'some stuff';
  ngOnInit() {
    this.applicant = [
      {
        label: 'Policy type', value: 'Comprehensive'
      },
      {
        label: 'Registration Number', value: 'S100 BOG'
      },
      {
        label: 'Vehicle', value: 'Corolla Sedan'
      },
      {
        label: 'Name', value: 'Celine Hodgeson'
      },
      {
        label: 'Phone number', value: '0412 345 678'
      },
      {
        label: 'Email', value: 'celine.hodgeson@gmail.com'
      }
    ];
  }
  test() {
    console.log('something');
  }
}
