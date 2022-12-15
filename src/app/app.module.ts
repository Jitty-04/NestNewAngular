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
