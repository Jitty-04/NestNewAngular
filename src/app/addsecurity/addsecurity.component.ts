import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addsecurity',
  templateUrl: './addsecurity.component.html',
  styleUrls: ['./addsecurity.component.css']
})
export class AddsecurityComponent {
  empcode=""
name=""
username=""
password=""
constructor(private api:ApiService){}
readValue=()=>
{
  let data:any={"empcode":this.empcode,"name":this.name,"username":this.username,"password":this.password}
  console.log(data)
  this.api.addSecurity(data).subscribe(
    (response:any)=>
    {
      console.log(response)
      if (response.status=="success") {
        alert("security added successfully")
      } else {
        alert("something wrong")
      }
    }
  )
}


}
