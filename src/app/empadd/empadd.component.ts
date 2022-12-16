import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-empadd',
  templateUrl: './empadd.component.html',
  styleUrls: ['./empadd.component.css']
})
export class EmpaddComponent {
  empcode=""
  empname=""
  designation=""
  salary=""
  username=""
  password=""
constructor(private api:ApiService){}

  readValue=()=>
  {
    let data:any={"empcode":this.empcode,"empname":this.empname,"designation":this.designation,
    "salary":this.salary,"username":this.username,"password":this.password}
    console.log(data)
    this.api.addEmployee(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        if (response.status=="success") {
          alert("Employee Added Successfully")
          this.empcode=""
          this.empname=""
          this.designation=""
          this.salary=""
          this.username=""
          this.password=""

        } else {
          alert("Something Wrong")
        }
      }
    )
  }
}


