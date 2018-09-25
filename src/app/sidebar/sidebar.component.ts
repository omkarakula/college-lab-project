import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public userData={};
  constructor() { 
    var userData=JSON.parse(sessionStorage.getItem('userData'));
    this.userData = userData;
  }

  ngOnInit() {
  }

}
