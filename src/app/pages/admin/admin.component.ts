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
  // = [
  //   {id: 1, email: 'Hydrogen', firstName: 'Hydrogen', lastName: 'Hydrogen', password: 'Hydrogen', phone:'Hydrogen', avatar: 'H', hoursActive: 5},
  //   {id: 2, email: 'Hydrogen', firstName: 'Hydrogen', lastName: 'Hydrogen', password: 'Hydrogen', phone:'Hydrogen', avatar: 'H', hoursActive: 5},
  //   {id: 3, email: 'Hydrogen', firstName: 'Hydrogen', lastName: 'Hydrogen', password: 'Hydrogen', phone:'Hydrogen', avatar: 'H', hoursActive: 5},
  //    ];
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'phone', 'hoursActive', 'action', 'details'];

  // employee: Employee = new Employee();

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
    console.log("Izbrisi");

    this.employeeService.deleteEmployee(id).subscribe(
      (data) => {
        console.log(data);
        this.reloadData();
      },
      (error) => console.log(error)
    );
  }

  navigateToEmployee(id: number) {
    console.log("Idi na detalje");
    this.router.navigate(['employee', id]);
  }

  addEmployee() {
    console.log("Dodaj novog");

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width="35%";
    dialogConfig.height="80%"

    this.dialog.open(CreateEmployeeComponent, dialogConfig);
  }

  

}
