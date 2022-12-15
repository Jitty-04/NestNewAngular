import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-appleave',
  templateUrl: './appleave.component.html',
  styleUrls: ['./appleave.component.css']
})
export class AppleaveComponent {
  empid =""
  leavetype =""
  remarks = ""
  from_date = ""
  to_date =""
  apply_date =""
  status=""
  
   
   constructor(private api:ApiService){}
   readValue=()=>
   {
     let data:any={"empid":this.empid,"leavetype":this.leavetype,"remarks":this.remarks,"from_date":this.from_date,
     "to_date":this.to_date,"apply_date":this.apply_date,"status":this.status}
     console.log(data)
     this.api.applyLeave(data).subscribe(
       (response:any)=>
       {
         console.log(response)
         if (response.status=="success") {
           alert("leave added successfully")
         } else {
           alert("something wrong")
         }
       }
     )
   }

}
