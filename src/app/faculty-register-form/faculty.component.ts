import { Component,Directive, forwardRef, Attribute,OnChanges, SimpleChanges,Input } from '@angular/core';
import { NG_VALIDATORS,Validator,Validators,AbstractControl,ValidatorFn,RadioControlValueAccessor } from '@angular/forms';
import { User }    from './user';
import { Router } from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {authenticate} from '../authenticate-service';
@Component({
  selector: 'faculty-register-page',
  templateUrl: 'faculty.component.html'

})

export class FacultyComponent {
  public facultyDetails={
    "name":"",
    "password":"",
    "confirmPassword":"",
    "faculty_id":"",
    "email":"",
    "mobile":"",
    "gender":""
  };
public isSelect:boolean=false;
constructor(public authenticate: authenticate, private router: Router) {
  
}
onSubmit() {
  if(this.facultyDetails.name && (this.facultyDetails.password === this.facultyDetails.confirmPassword) && this.facultyDetails.faculty_id && this.facultyDetails.email && this.facultyDetails.mobile && this.facultyDetails.gender){
    this.authenticate.register_faculty(this.facultyDetails).subscribe(result => {
      if(result.stat == true){
        alert("registered succesfully");
        this.facultyDetails={
          "name":"",
          "password":"",
          "confirmPassword":"",
          "faculty_id":"",
          "email":"",
          "mobile":"",
          "gender":""
        };
        this.router.navigate(['/']);
      }
   }, 
     err => { 
       }
    )
  }
  if(!this.facultyDetails.gender){
    this.isSelect=true;
  }
}
  
}