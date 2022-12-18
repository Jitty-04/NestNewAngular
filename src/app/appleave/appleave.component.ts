import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-appleave',
  templateUrl: './appleave.component.html',
  styleUrls: ['./appleave.component.css']
})
export class AppleaveComponent {
  empid:any=""
  leavetype=""
   remarks=""
  from_date=""
   to_date=""
   constructor(private api:ApiService){
     this.empid=localStorage.getItem("userInfo")
   }
   readValue=()=>
   {
     let data:any={"empid":this.empid,"leavetype":this.leavetype,"remarks":this.remarks,"from_date":this.from_date,
     "to_date":this.to_date}
     console.log(data)
     this.api.applyLeave(data).subscribe(
       (response:any)=>
       {
         console.log(response)
         if (response.status=="success") {
           alert("leave added successfully")
           this.empid=""
           this.from_date=""
           this.leavetype=""
           this.remarks=""
           this.to_date=""
         } else {
           alert("something wrong")
         }
       }
     )
   }

}
