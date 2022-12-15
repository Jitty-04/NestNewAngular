import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employeelogin',
  templateUrl: './employeelogin.component.html',
  styleUrls: ['./employeelogin.component.css']
})
export class EmployeeloginComponent {
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
    this.api.employeeLogin(data).subscribe(
      (response:any)=>
      {
        this.username=""
        this.password=""
        console.log(response)
        if (response.status=="success") {
          this.searchUser=response; 
          let empId=response.empId
          console.log(empId)
          localStorage.setItem("userInfo",empId)
          this.router.navigate(['/emphome'])
        }
        else{
          alert("Inalid credentials")
        }
       
       
      }
    )
  }

}
