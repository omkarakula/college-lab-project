import { Component,Directive, forwardRef, Attribute,OnChanges, SimpleChanges,Input } from '@angular/core';
import { NG_VALIDATORS,Validator,Validators,AbstractControl,ValidatorFn } from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import { Router } from '@angular/router';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {authenticate} from '../authenticate-service';
import swal from 'sweetalert2'; 
@Component({
  moduleId: module.id,
  selector: 'login-page',
  templateUrl: 'login.component.html'
 
})

export class LoginComponent {
  public userDetails={
    "email":"",
    "password":""
  };
  constructor(public authenticate: authenticate, private router: Router) {
    
  }
  
  onSubmit() {
    if(this.userDetails.email && this.userDetails.password){
      this.authenticate.authenticateService(this.userDetails).subscribe(result => {
        if(result.stat == true){
          sessionStorage.setItem('userData',JSON.stringify(result.data));
          if(result.data[0].ROLE_ID==3){
            this.router.navigate(['time-table']);
          }
          else{
            this.router.navigate(['dashboard']);
          }
        }
        if(result.stat == false){
          swal('Authentication Failed', 'Username or password is incorrect.', 'error');
        }
     }, 
       err => { 
         }
      )
    }
  }
  // submitted = false;
  // onSubmit() { this.submitted = true; }
  // newHero() {}
}