import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UploadRequest } from '../model/uploadRequest';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = 'http://localhost:8080/employee';

  private loginUrl = 'http://localhost:8080/login';

  constructor(private http: HttpClient) { }

  
  addEmployee(employee: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, employee);
  }

  getEmployeesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getEmployee(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }


  updateEmployee(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}/update`, value);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  uploadFile(fileToUpload: UploadRequest, id: number): Observable<any>{
    return this.http.post(`${this.baseUrl}/${id}/upload/avatar`, fileToUpload);
  }

  getAvatar(id: number) : Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}/avatar`);
  }

  login(loginRequest: Object): Observable<any> {
    return this.http.post<any>(`${this.loginUrl}`, loginRequest);
  }
}