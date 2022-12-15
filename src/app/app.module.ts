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
    AddempnavComponent
    
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
