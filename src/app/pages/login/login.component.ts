import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

email: string;
password: string;

  ngOnInit(): void {
  }

  login() : void {
    if(this.email == 'admin' && this.password == "admin"){
      this.router.navigate(["employee"]);
    } else {
      alert("Invalid credentials");
    }
  }

}
