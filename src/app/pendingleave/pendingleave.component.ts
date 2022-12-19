import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-pendingleave',
  templateUrl: './pendingleave.component.html',
  styleUrls: ['./pendingleave.component.css']
})
export class PendingleaveComponent {
  empid:any=""
Data:any=[]
constructor(private api:ApiService){
  this.empid=localStorage.getItem("userInfo")
  let Data:any={"empid":this.empid}
  this.api.viewPendingLeaves(Data).subscribe(
    (response:any)=>{
      console.log(response)
      this.Data=response
    }
  )
}

}
