import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aim = "Your perfect banking patner"
  acctName = "Account Number"
  password = "Password"
  acno = ""
  pswd = ""

  //database
  database : any= {
    1000: { acno: 1000, username: "dilinjose", password: 1000, balance: 5000 },
    1001: { acno: 1001, username: "dilinjose1", password: 1001, balance: 6000 },
    1002: { acno: 1002, username: "dilinjose2", password: 1002, balance: 7000 },
  }
  constructor() { }

  ngOnInit(): void {
  }

  acnoChange(event: any) {
    // console.log(event)
    this.acno = event.target.value
  }
  pswdChange(event: any) {
    this.pswd = event.target.value
  }

  // login using event binding
  
  // login() {
  //   let acno = this.acno;
  //   let pswd = this.pswd;

  //   if (acno in this.database) {
  //     if (pswd == this.database[acno]["password"]) {
  //       alert("Login Successful")

  //     }
  //     else{
  //       alert("Invalid Password")
  //     }
  //   }
  //   else {
  //     alert("Invalid Account Number");
  //   }
  // }

//login using template reference variable

  login(a:any,p:any) {
    // console.log(a.value);
    // console.log(p.value);
    let acno = a.value;
    let pswd = p.value;

    if (acno in this.database) {
      if (pswd == this.database[acno]["password"]) {
        alert("Login Successful")

      }
      else{
        alert("Invalid Password")
      }
    }
    else {
      alert("Invalid Account Number");
    }
  }



}
