import { Component, OnInit } from '@angular/core';
import { Employee } from '../../model/employee';
import { EmployeeService } from '../../service/employee.service';
import { ActivatedRoute } from '@angular/router';
import { UploadRequest } from 'src/app/model/uploadRequest';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  employee: Employee;
  id: number;
  avatar: any;

  selectedFile: File;

  public inactive: boolean = true;
  public isButtonVisible: boolean = false;

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.employee = new Employee();

    this.id = this.route.snapshot.params['id'];

    this.getEmployee();
  }

  handleFileInput(event) {
    this.selectedFile = event.target.files[0];
    console.log('swel', this.selectedFile);
    let importRequest: UploadRequest = new UploadRequest();
    let reader = new FileReader();
    reader.readAsBinaryString(this.selectedFile);
    reader.onload = () =>{
      importRequest.file = btoa(reader.result.toString());
      importRequest.fileName = this.selectedFile.name;
      importRequest.mimeType = this.selectedFile.type;
      importRequest.extension = this.getExtensionFromFileName(this.selectedFile.name);
      console.log("req",importRequest)
      this.employeeService
      .uploadFile(importRequest, this.id).subscribe((response) => {
        {
          this.getAvatar();
          console.log('Success');
        }
        (error) => console.log('Failed');
      });
    }
    
  }

  getExtensionFromFileName(fileName: string){
    return fileName.substr(fileName.lastIndexOf('.')+1);
  }

  getAvatar() {
    this.employeeService.getAvatar(this.id).subscribe(
      (data) => {
        if (data != null) {
          this.avatar = 'data:' + data.mimeType + ';base64,' + data.file;
        }
      },
      (error) => console.log(error)
    );
  }

  getEmployee() {
    this.employeeService.getEmployee(this.id).subscribe(
      (data) => {
        this.employee = data;
        this.getAvatar();
      },
      (error) => console.log(error)
    );
  }

  changeStatus() {
    this.inactive = false;
    this.isButtonVisible = true;
  }

  updateEmployee() {
    this.employeeService.updateEmployee(this.id, this.employee).subscribe(
      (data) => console.log(data),
      (error) => console.log(error)
    );
  }

  onSave(): void {
    this.updateEmployee();

    this.isButtonVisible = false;
    this.inactive = true;
  }
}
