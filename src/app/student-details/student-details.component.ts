import {Component} from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import {BrowserModule} from '@angular/platform-browser';
import { Router } from '@angular/router';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {authenticate} from '../authenticate-service';

@Component({
  selector: 'student-details',
  templateUrl: 'student-details.component.html',
  styleUrls: ['student-details.component.css']
})

export class StudentDetailComponent {
  public students = [];
  constructor(public authenticate: authenticate, private router: Router) {
    this.getStudent();
  }
  getStudent(){
    this.authenticate.get_student().subscribe(result => {
      this.students=result;
    })
  }
}

