import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-adminviewswcurity',
  templateUrl: './adminviewswcurity.component.html',
  styleUrls: ['./adminviewswcurity.component.css']
})
export class AdminviewswcurityComponent {
  constructor(private api:ApiService){
    api.viewsecurity().subscribe(
      (response)=>
      {
        this.data=response;
      }
    )
  }
  data:any=[]

}
