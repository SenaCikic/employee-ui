import { Component, OnInit, Inject } from '@angular/core';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/service/employee.service';
import { Router } from '@angular/router';
import { MatDialogClose } from '@angular/material/dialog';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css'],
})
export class CreateEmployeeComponent implements OnInit {
  employee: Employee = new Employee();
  saved = false;

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  newEmployee(): void {
    this.saved = false;
    this.employee = new Employee();
  }

  save() {
    console.log('kreiraj');
    this.employeeService.addEmployee(this.employee).subscribe(
      (data) => console.log(data),
      (error) => console.log(error)
    );
    this.employee = new Employee();
  }

  onSave() {
    this.saved = true;
    this.save();
  }
}
