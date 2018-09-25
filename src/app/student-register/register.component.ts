import { Component,Directive, forwardRef, Attribute,OnChanges, SimpleChanges,Input } from '@angular/core';
import { NG_VALIDATORS,Validator,Validators,AbstractControl,ValidatorFn } from '@angular/forms';
import { User }    from './user';
import { Router } from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {authenticate} from '../authenticate-service';

@Component({
  
  selector: 'register-page',
  templateUrl: 'register.component.html'

})


export class RegisterComponent {
  public studentDetails={
    "name":"",
    "password":"",
    "confirmPassword":"",
    "hall_ticket":"",
    "email":"",
    "mobile":"",
    "branch":"",
    "year":""
  };
  constructor(public authenticate: authenticate, private router: Router) {
    
  }
  onSubmit() {
    if(this.studentDetails.name && this.studentDetails.password && this.studentDetails.hall_ticket && this.studentDetails.email && this.studentDetails.mobile && this.studentDetails.branch && this.studentDetails.year){
      this.authenticate.register_student(this.studentDetails).subscribe(result => {
        if(result.stat == true){
          alert("registered succesfully");
          this.studentDetails={
            "name":"",
            "password":"",
            "confirmPassword":"",
            "hall_ticket":"",
            "email":"",
            "mobile":"",
            "branch":"",
            "year":""
          };
          this.router.navigate(['/']);
        }
             }, 
       err => { 
         }
      )
    }
  }
}