import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
aim="Your perfect banking patner"
acctName="Account Number"
password="Password"
acno=""
pswd=""

//database
database={
  1000:{acno:1000,username:"dilinjose",password:1000,balance:5000},
  1001:{acno:1001,username:"dilinjose1",password:1001,balance:5000},
  1002:{acno:1002,username:"dilinjose2",password:1002,balance:5000},
}
  constructor() { }

  ngOnInit(): void {
  }
 
  acnoChange(event:any){
    this.acno=event.target.value
  }
  pswdChange(event:any){
    this.pswd=event.target.value
  }

login(){
  alert("Login clicked")
}
}
