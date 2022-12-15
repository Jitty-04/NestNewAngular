import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-securitylogin',
  templateUrl: './securitylogin.component.html',
  styleUrls: ['./securitylogin.component.css']
})
export class SecurityloginComponent {
  username=""
  password=""
searchUser:any=[]
constructor(private api:ApiService,private router:Router){}
readValue=()=>
  {
    let data:any= {
      "username":this.username,"password":this.password
    }
    console.log(data)
    this.api.securitylogin(data).subscribe(
      (response:any)=>
      {
        this.username=""
        this.password=""
        console.log(response)
        if (response.status=="success") {
          this.searchUser=response; 
          let securityId=response.securityId
          console.log(securityId)
          localStorage.setItem("userInfo",securityId)
          this.router.navigate(['/securityhome'])
        }
        else{
          alert(response.message)
        }
       
       
      }
    )
  }
}
