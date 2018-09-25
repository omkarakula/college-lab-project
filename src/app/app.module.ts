import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { NgxCarouselModule } from 'ngx-carousel';
import {CdkTableModule} from '@angular/cdk/table';
import { PopoverModule } from 'ng2-popover';
import {authenticate} from './authenticate-service';
//import {AuthGuard} from './auth.guard';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './student-register/register.component';
import { FacultyComponent } from './faculty-register-form/faculty.component';
import { DashboardComponent,DashboardModalExampleDialog} from './dashboard/dashboard.component';
import {StudentDetailComponent } from './student-details/student-details.component';
import { FacultyDetailComponent } from './faculty-details/faculty-details.component';
import { TimeTableComponent } from './time-table/time-table.component';
import { LabDetailsComponent } from './lab-details/lab-details.component'
import { EqualValidator } from './login/password.match.directive'

import { 
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule
} from '@angular/material';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { BookLabComponent } from './book-lab/book-lab.component';

const appRoutes: Routes = [
  // { path: '', component: AppComponent },
  //,canActivate: [AuthGuard]
  { path: '', component: LoginComponent  },
  { path: 'student-register', component: RegisterComponent },
  { path: 'faculty-register-form', component: FacultyComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'student-details', component:  StudentDetailComponent },
  { path: 'faculty-details', component: FacultyDetailComponent },
  { path: 'time-table', component: TimeTableComponent },
  { path: 'lab-details', component: LabDetailsComponent },
  { path: 'book-lab', component: BookLabComponent }
];

@NgModule({
  entryComponents: [DashboardComponent, DashboardModalExampleDialog],
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    FacultyComponent,
    DashboardComponent,
    DashboardModalExampleDialog, 
    StudentDetailComponent,
    FacultyDetailComponent,
    TimeTableComponent,
    LabDetailsComponent,
    EqualValidator,
    SidebarComponent,
    HeaderComponentComponent,
    BookLabComponent
  ],
  
  imports: [
    BrowserModule,
    CdkTableModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    PopoverModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    NgxCarouselModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
  ],
  providers: [authenticate],
  bootstrap: [AppComponent],
  
})
//,AuthGuard
export class AppModule { }
