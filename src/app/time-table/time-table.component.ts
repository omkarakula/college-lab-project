import {Component} from '@angular/core';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { authenticate } from '../authenticate-service';


@Component({
  selector: 'time-table',
  templateUrl: 'time-table.component.html',
  styleUrls: ['time-table.component.css']
})

export class TimeTableComponent {
  public timeTable = [];
  public labname = "";
  public userData =[];
  updateDetails = {
    "ttid":"",
    "stat":"",
    "faculty_id":""
  };

  constructor(public auth: authenticate, private router: Router) {
    this.getTimeTable();
    var userData=JSON.parse(sessionStorage.getItem('userData'));
    this.userData = userData;
  }

  getTimeTable() {
    this.auth.get_times().subscribe(result => {
      this.timeTable = [];
      this.timeTable = result;
      console.log("this.timeTable",this.timeTable);
    });
  }

}