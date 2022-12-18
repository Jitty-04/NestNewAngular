import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-admnvistor',
  templateUrl: './admnvistor.component.html',
  styleUrls: ['./admnvistor.component.css']
})
export class AdmnvistorComponent {
  constructor(private api:ApiService){
    api.viewVisitorLog().subscribe(
      (response:any)=>
      {
        this.data=response
      }
    )
  }
  date=""
  searchData:any=[]
  readValue=()=>
  {
    let data:any={"date":this.date}
    console.log(data)
    this.api.viewDailyVisitorLog(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        if(response.length==0)
        {
          alert("invalid")
          window.location.reload()
        }
        else{
          this.data=[];
          this.searchData=response
        }
      }
    )

  }
  data:any=[]


}
