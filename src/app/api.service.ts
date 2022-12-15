import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  addEmployee=(data:any)=>
  {
    return this.http.post("http://localhost:8080/addemp",data)
  }
  viewEmployee=()=>
  {
    return this.http.get("http://localhost:8080/viewemp")
  }
  searchEmployee=(data:any)=>
  {
    return this.http.post("http://localhost:8080/searchemp",data)
  }
  deleteEmployee=(data:any)=>
  {
    return this.http.post("http://localhost:8080/empdelete",data)
  }
  viewAllLeave=()=>
  {
    return this.http.get("http://localhost:8080/viewallleave")
  }
  addSecurity=(data:any)=>
  {
    return this.http.post("http://localhost:8080/addsecurity",data)
  }
  viewsecurity=()=>
  {
    return this.http.get("http://localhost:8080/viewsecurity")
  }
  securitylogin=(data:any)=>
  {
    return this.http.post("http://localhost:8080/securitylogin",data)
  }
  securityViewProf=(data:any)=>
  {
    return this.http.post("http://localhost:8080/securityprofile",data)
  }
  addVisitorLog=(data:any)=>
  {
    return this.http.post("http://localhost:8080/logvisitor",data)
  }
  addEmpLog=(data:any)=>
  {
    return this.http.post("http://localhost:8080/logemp",data)
  }
  viewVisitorLog=()=>
  {
    return this.http.get("http://localhost:8080/viewallvisitorlog")
  }
  viewEmployLog=()=>
  {
    return this.http.get("http://localhost:8080/viewallemployeelog")
  }
  viewDailyVisitorLog=(data:any)=>
  {
    return this.http.post("http://localhost:8080/viewdailyvisitorelog",data)
  }
  viewDailyEmpLog=(data:any)=>
  {
    return this.http.post("http://localhost:8080/viewdailyemployeelog",data)
  }
  employeeLogin=(data:any)=>
  {
    return this.http.post("http://localhost:8080/emplogin",data)
  }
  empViewProf=(data:any)=>
  {
    return this.http.post("http://localhost:8080/empprofile",data)
  }
  applyLeave=(data:any)=>
  {
    return this.http.post("http://localhost:8080/leaveapp",data)
  }
}
