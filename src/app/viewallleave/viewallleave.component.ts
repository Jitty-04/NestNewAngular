import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewallleave',
  templateUrl: './viewallleave.component.html',
  styleUrls: ['./viewallleave.component.css']
})
export class ViewallleaveComponent {
  constructor(private api:ApiService){
    api.viewAllLeave().subscribe(
      (response)=>
      {
        this.data=response;
      }
    )
  }
  data:any=[]

}
