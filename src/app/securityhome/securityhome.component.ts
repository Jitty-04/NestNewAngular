import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-securityhome',
  templateUrl: './securityhome.component.html',
  styleUrls: ['./securityhome.component.css']
})
export class SecurityhomeComponent {
  securityId:any=""
  constructor(private api:ApiService){
    this.securityId=localStorage.getItem("userInfo")
    let data:any={
        "id":this.securityId
    }
    this.api.securityViewProf(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        this.data=response
      }
    )
  }
  data:any=[]
}



