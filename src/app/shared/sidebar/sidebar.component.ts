import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
    `
    li {
      cursor: pointer; 
    } `
  ]
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

// Usado para colocar el puntero solo a los li que se encuentran en el sidebar component
/* styles: [
  `
  li {
    cursor: pointer; 
  } `
] */