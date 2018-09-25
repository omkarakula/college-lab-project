import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) {
     }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('user_data') || localStorage.getItem('user_data') != null) {
            // logged in so return true
            alert("working");
            return true;
        }

        else{
            // not logged in so redirect to login page with the return url
            alert("sdfds");
            console.log("state",state);
            return this.router.navigate(['']);
        }
    }
}