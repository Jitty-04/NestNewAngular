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

const myRouter:Routes=[
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"admin",
    component:AdminComponent
  }
 

  
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomenavComponent,
    AdminComponent,
    AdminnavComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRouter),
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
