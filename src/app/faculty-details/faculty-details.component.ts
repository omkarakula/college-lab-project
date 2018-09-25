import {Component} from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import {BrowserModule} from '@angular/platform-browser';
import { Router } from '@angular/router';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {authenticate} from '../authenticate-service';

@Component({
  selector: 'faculty-details',
  templateUrl: 'faculty-details.component.html',
  styleUrls: ['faculty-details.component.css']
})

export class FacultyDetailComponent {
  public employees = [];
  constructor(public authenticate: authenticate, private router: Router) {
    this.getEmployees();
  }
  getEmployees(){
    this.authenticate.get_emp().subscribe(result => {
      this.employees=result;
    })
  }
}

