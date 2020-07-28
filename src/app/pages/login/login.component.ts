import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/service/employee.service';
import { Employee } from 'src/app/model/employee';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
 
  employee: Employee = new Employee();

  constructor(
    private router: Router,
    private employeeService: EmployeeService
  ) {}

  // email: string;
  // password: string;

  ngOnInit(): void {}

  login(): void {
    this.employeeService.login(this.employee).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }
  //   if(this.email == 'admin' && this.password == "admin"){
  //     this.router.navigate(["employee"]);
  //   } else {
  //     alert("Invalid credentials");
  //   }
  // }
}
