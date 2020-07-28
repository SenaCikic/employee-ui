import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/service/employee.service';
import { Router } from '@angular/router';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { CreateEmployeeComponent } from '../employee/create-employee/create-employee.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  employees: Observable<Employee[]>;

  displayedColumns: string[] = [
    'firstName',
    'lastName',
    'email',
    'phone',
    'hoursActive',
    'action',
    'details',
  ];

  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.employees = this.employeeService.getEmployeesList();
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id).subscribe(
      (data) => {
        console.log(data);
        this.reloadData();
      },
      (error) => console.log(error)
    );
  }

  navigateToEmployee(id: number) {
    this.router.navigate(['employee', id]);
  }

  addEmployee() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '35%';
    dialogConfig.height = '80%';

    this.dialog.open(CreateEmployeeComponent, dialogConfig);
  }
}
