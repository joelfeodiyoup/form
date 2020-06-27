import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navItems = [
    {
      label: 'css',
      items: [
        {
          label: 'grid',
          href: 'css/grid'
        }
      ]
    },
  {
    label: 'Map',
    href: 'Map',
    items: [
      {
        label: 'stuff',
        href: 'blah'
      }
    ]
  },
  {
    label: 'Form',
    href: 'Form'
  }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
