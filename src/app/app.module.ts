import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomenavComponent } from './homenav/homenav.component';
const myRouter:Routes=[
  {
    path:"",
    component:HomeComponent
  }
  
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRouter)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
