import {Component} from '@angular/core';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { authenticate } from '../authenticate-service';


@Component({
  selector: 'app-book-lab',
  templateUrl: './book-lab.component.html',
  styleUrls: ['./book-lab.component.css']
})
export class BookLabComponent{
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
    });
  }

  statUpdate(ttid, stat): void {
    this.updateDetails = {
      "ttid": ttid,
      "stat": stat,
      "faculty_id":"3"
    };
    this.auth.update_stat(this.updateDetails).subscribe(result => {
      this.getTimeTable();
      // if(result.stat == true){
      //   //this.router.navigate(['time-table']);
      //   alert(1);
      // }
      // this.router.navigate(['time-table']);
      //window.location.reload();
    }, 
      err => { 
        console.log("errrr");
        }
    )
  };
  // statUpdate(ttid, stat): void {
  //   this.updateDetails = {
  //     "ttid": ttid,
  //     "stat": stat,
  //     "faculty_id":"3"
  //   };
  //   this.auth.update_stat(this.updateDetails).subscribe(result => {
  //     this.getTimeTable();
  //     // if(result.stat == true){
  //     //   //this.router.navigate(['time-table']);
  //     //   alert(1);
  //     // }
  //     // this.router.navigate(['time-table']);
  //     //window.location.reload();
  //   }, 
  //     err => { 
  //       console.log("errrr");
  //       }
  //   )
  // }
}