import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-adminviewemp',
  templateUrl: './adminviewemp.component.html',
  styleUrls: ['./adminviewemp.component.css']
})
export class AdminviewempComponent {
  constructor(private api:ApiService){
    api.viewEmployee().subscribe(
      (response)=>
      {
        this.data=response;
      }
    )
  }
  data:any=[]
  }


