import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navItems: {label, href}[] = [
  {
    label: "Map",
    href: "Map"
  },
  {
    label: "Quests",
    href: "Quests"
  },
  {
    label: "Inventory",
    href: "Inventory"
  },
  {
    label: "Abilities",
    href: "Abilities"
  },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
