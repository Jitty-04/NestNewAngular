import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-emphome',
  templateUrl: './emphome.component.html',
  styleUrls: ['./emphome.component.css']
})
export class EmphomeComponent {
  empId:any=""
  data:any=[]
constructor(private api:ApiService){

  this.empId=localStorage.getItem("userInfo")
    let data:any={
      "id":this.empId
    }
    this.api.empViewProf(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        this.data=response
      }
    )
  }

}
