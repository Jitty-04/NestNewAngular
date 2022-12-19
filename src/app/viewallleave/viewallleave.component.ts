import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewallleave',
  templateUrl: './viewallleave.component.html',
  styleUrls: ['./viewallleave.component.css']
})
export class ViewallleaveComponent {
  constructor(private api:ApiService){
    api.viewAllLeave().subscribe(
      (response)=>
      {
        this.data=response;
      }
    )
  }
  data:any=[]
  statusview:any={}
  acceptvalue=(data:any)=>{
    this.statusview=1;
    let accept:any={"empid":data,"status":this.statusview}
    this.api.update(accept).subscribe(
      (response:any)=>{
        if(response.status=="success"){
          console.log(response)
          console.log(response.status)
          this.api.leavePending(accept).subscribe(
            (response:any)=>{
              console.log(response)
            }
          )
          alert("success")
          window.location.reload()

        }
        else{
          alert("failed")
        }
      }
    )
  }
  rejectvalue=(data:any)=>{
    this.statusview=-1
    let reject:any={"empid":data,"status":this.statusview}
    this.api.update(reject).subscribe(
      (response:any)=>{
        if(response.status="success"){
          console.log(response)
          console.log(response.status)
          alert("success")
          window.location.reload()
        }
        else{
          alert("failed")
        }
      }
    )
  }

}
