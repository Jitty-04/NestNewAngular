import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-empvisitorentry',
  templateUrl: './empvisitorentry.component.html',
  styleUrls: ['./empvisitorentry.component.css']
})
export class EmpvisitorentryComponent {
  empid=""
  date=""
  entry_datetime=""
  exit_datetime=""
constructor(private api:ApiService){}
  readValue=()=>
  {
    let data:any={"empid":this.empid,"date":this.date,"entry_datetime":this.entry_datetime,"exit_datetime":this.exit_datetime}
    console.log(data)
    this.api.addEmpLog(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        if (response.status=="success") {
          alert("Successfully Entered")
          window.location.reload()
        } else {
          alert("wrong data")
          window.location.reload()
        }
      }
    )
  }

}
