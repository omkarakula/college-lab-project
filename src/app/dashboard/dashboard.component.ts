import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Data } from '../model/data';
import { Datas } from '../model/mock-datas';
import {authenticate} from '../authenticate-service';

@Component({
  selector: 'dashboard-page',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})

export class DashboardComponent {
  // labData = Datas;
  public labs=[];
  constructor(public dialog: MatDialog,public authenticate: authenticate) {
    this.getLabs();
  }

  ngOnIt() {
    this.getLabs();
  }

  openDialog(index): void {
    let dialogRef = this.dialog.open(DashboardModalExampleDialog, {
      width: '400px',
      data: {
        lab_status: this.labs[index]
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      
    });
  };
  getLabs(){
    this.authenticate.get_labs().subscribe(result => {
      this.labs=result;
    })
  }

}


@Component({
  selector: 'dashboard-modal-example-dialog',
  templateUrl: 'dashboard-modal-example-dialog.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardModalExampleDialog {
  public lab_info={};
  constructor(
    
    public dialogRef: MatDialogRef<DashboardModalExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any,public authenticate: authenticate) {
      console.log("FULL_NAME",this.data);
     }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
