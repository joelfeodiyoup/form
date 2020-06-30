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
      href: 'css',
      items: [
        {
          label: 'grid',
          href: 'css/grid'
        }
      ]
    },
    {
      label: 'angular',
      href: 'angular-experiments'
    },
  {
    label: 'Form',
    href: 'Form',
    items: [
      {
        label: 'grid',
        href: 'css/grid'
      }
    ]
  }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
