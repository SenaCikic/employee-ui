import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/service/employee.service';
import { Employee } from 'src/app/model/employee';
import { LoginRequest } from 'src/app/model/loginRequest';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  employee: Employee = new Employee();
  id: number;

  loginRequest: LoginRequest = new LoginRequest();

  constructor(
    private router: Router,
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
  }

  login(): void {
    console.log(this.loginRequest);

    this.employeeService.login(this.loginRequest).subscribe((response) => {
      this.id = response.id;
      if (response != null && response.role=='admin') {
        this.router.navigate(['/admin']);
      } else if (response != null && response.role=='employee') {
        this.router.navigate(['employee', this.id]);
      }
      else { alert("Bad credentials ")}
      (error) => console.log(error);
    });
  }
}
