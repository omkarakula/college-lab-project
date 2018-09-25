import { Component,Directive,OnInit, forwardRef, Attribute,OnChanges, SimpleChanges,Input } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { Router } from '@angular/router';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  signOut(){
    sessionStorage.setItem('userData',null);
    this.router.navigate(['/']);
  }
}
