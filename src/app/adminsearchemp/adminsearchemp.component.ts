import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-adminsearchemp',
  templateUrl: './adminsearchemp.component.html',
  styleUrls: ['./adminsearchemp.component.css']
})
export class AdminsearchempComponent {
  empcode=""
constructor(private api:ApiService,private router:Router){}

searchData:any=[]
  readValue=()=>
  {
    let data:any={"empcode":this.empcode}
    console.log(data)
    this.api.searchEmployee(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        if (response.length==0) {
          alert("Invalid emp code")
        } else {
          this.searchData=response;
        }
      }
    )
  }

  deleteBtnClick=(id:any)=>
  {
    let data:any={"id":id}
    this.api.deleteEmployee(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        if (response.status=="success") {
          alert("employ deleted successfully")
          window.location.reload()
        } else {
          alert("can not delete")
        }
      }
    )
  }

}
