import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  navItems = [
    {
      label: 'css',
      href: 'css',
      items: [
        {
          label: 'grid',
          href: 'css/grid'
        },
        {
          label: 'background patterns',
          href: 'css/background-pattern'
        },
        {
          label: 'striped backgrounds',
          href: 'css/striped-backgrounds'
        },
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

}
