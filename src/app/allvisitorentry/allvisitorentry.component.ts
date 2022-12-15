import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-allvisitorentry',
  templateUrl: './allvisitorentry.component.html',
  styleUrls: ['./allvisitorentry.component.css']
})
export class AllvisitorentryComponent {
  constructor(private api:ApiService){
    api.viewVisitorLog().subscribe(
      (response)=>
      {
        this.data=response;
      }
    )
  }
  data:any=[]

}
