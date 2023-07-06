import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  ngOnInit(): void {}
@Input() sideNavStatus: boolean = false;


  list = [
    {
      number:'1',
      name: 'home',
      icon: 'fa-solid fa-house'
    },
    {
      number:'2',
      name: 'AnalYtics',
      icon: 'fa-solid fa-chart-line'
    },
    {
      number:'3',
      name: 'Product',
      icon: 'fa-solid fa-box'
    },
    {
      number:'4',
      name: 'Order',
      icon: 'fa-solid fa-cart-shopping'
    },
    {
      number:'5',
      name: 'Settings',
      icon: 'fa-solid fa-gear'
    },
    {
      number:'6',
      name: 'About',
      icon: 'fa-solid fa-circle-info'
    },
    {
      number:'7',
      name: 'Contact',
      icon: 'fa-solid fa-phone'
    },
  ]

}
