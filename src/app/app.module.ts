import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomenavComponent } from './homenav/homenav.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule } from '@angular/forms';
import { AdminnavComponent } from './adminnav/adminnav.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { EmpaddComponent } from './empadd/empadd.component';
import {HttpClientModule} from '@angular/common/http';
import { AddempnavComponent } from './addempnav/addempnav.component';
import { AdminviewempComponent } from './adminviewemp/adminviewemp.component';
import { AdminsearchempComponent } from './adminsearchemp/adminsearchemp.component';
import { ViewallleaveComponent } from './viewallleave/viewallleave.component';
import { AddsecurityComponent } from './addsecurity/addsecurity.component';
import { AdminsecuritynavComponent } from './adminsecuritynav/adminsecuritynav.component';
import { AdminviewswcurityComponent } from './adminviewswcurity/adminviewswcurity.component';
import { SecurityloginComponent } from './securitylogin/securitylogin.component';
import { SecurityhomenavComponent } from './securityhomenav/securityhomenav.component';
import { SecurityhomeComponent } from './securityhome/securityhome.component';
import { VistoraddentryComponent } from './vistoraddentry/vistoraddentry.component';
import { EmpvisitorentryComponent } from './empvisitorentry/empvisitorentry.component';
import { AllvisitorentryComponent } from './allvisitorentry/allvisitorentry.component';
import { AllempentryComponent } from './allempentry/allempentry.component';
import { EmployeeloginComponent } from './employeelogin/employeelogin.component';
import { EmphomeComponent } from './emphome/emphome.component';
import { EmpnavComponent } from './empnav/empnav.component';
import { AppleaveComponent } from './appleave/appleave.component';
import { AdmnvistorComponent } from './admnvistor/admnvistor.component';
import { AdmempentryComponent } from './admempentry/admempentry.component';





const myRouter:Routes=[
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"admin",
    component:AdminComponent
  },
  {
    path:"adminhome",
    component:AdminhomeComponent
  },
  {
    path:"addemp",
    component:EmpaddComponent
  },
  {
    path:"viewemp",
    component:AdminviewempComponent
  },
  {
    path:"searchemp",
    component:AdminsearchempComponent

  },
  {
    path:"viewleave",
    component:ViewallleaveComponent
  },
  {
    path:"addsecurity",
    component:AddsecurityComponent
  },
  {
    path:"viewsecurity",
    component:AdminviewswcurityComponent
  },
  {
    path:"security",
    component:SecurityloginComponent
  },
  {
    path:"securityhome",
    component:SecurityhomeComponent
  },
  {
    path:"visitorentry",
    component:VistoraddentryComponent
  },
  {
    path:"employeeentry",
    component:EmpvisitorentryComponent
  },
  {
    path:"allvisitorentry",
    component:AllvisitorentryComponent
  },
  {
    path:"allempvisitor",
    component:AllempentryComponent
  },
  {
    path:"emplogin",
    component:EmployeeloginComponent
  },
  {
    path:"emphome",
    component:EmphomeComponent
  },
  {
    path:"applyleave",
    component:AppleaveComponent
  },
  {
    path:"visitentry",
    component:AdmnvistorComponent
  },
  {
    path:"empentry",
    component:AdmempentryComponent
  }

]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomenavComponent,
    AdminComponent,
    AdminnavComponent,
    AdminhomeComponent,
    EmpaddComponent,
    AddempnavComponent,
    AdminviewempComponent,
    AdminsearchempComponent,
    ViewallleaveComponent,
    AddsecurityComponent,
    AdminsecuritynavComponent,
    AdminviewswcurityComponent,
    SecurityloginComponent,
    SecurityhomenavComponent,
    SecurityhomeComponent,
    VistoraddentryComponent,
    EmpvisitorentryComponent,
    AllvisitorentryComponent,
    AllempentryComponent,
    EmployeeloginComponent,
    EmphomeComponent,
    EmpnavComponent,
    AppleaveComponent,
    AdmnvistorComponent,
    AdmempentryComponent,
  
  
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRouter),
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
