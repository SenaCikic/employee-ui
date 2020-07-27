import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../../model/employee';
import { EmployeeService } from '../../service/employee.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employee: Employee;
  id: number;

  imageUrl: string="../assets/img/img-avatar-blank.jpg";
  fileToUpload: File = null;

  public inactive: boolean = true;
  public isButtonVisible: boolean = false;

  constructor(private employeeService: EmployeeService, private route: ActivatedRoute) { }
  

  ngOnInit(): void {

    this.employee = new Employee();

    this.id = this.route.snapshot.params['id'];

    this.employeeService.getEmployee(this.id)
      .subscribe(data => {
        console.log(data)
        this.employee = data;
      }, error => console.log(error))
  }

  handleFileInput(file : FileList){
    this.fileToUpload=file.item(0);

    var reader = new FileReader();
    reader.onload = (event:any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }

  changeStatus(){
    this.inactive = false;
    this.isButtonVisible = true;
 }

 updateEmployee(){
  
  this.employeeService.updateEmployee(this.id, this.employee)
    .subscribe(data => console.log(data), error => console.log(error))
  }

 onSave(): void {
   
  this.updateEmployee();

  this.isButtonVisible = false;
  this.inactive=true;
}
}
