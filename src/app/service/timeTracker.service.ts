import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DailyTracker } from '../model/dailyTracker';

@Injectable({
  providedIn: 'root'
})
export class TimeTrackerService {

  private baseUrl = 'http://localhost:8080/time-tracker';

  constructor(private http: HttpClient) { }

  getMonthlyTracker(id: number, month: String): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}/${month}/month`);
  }

  getDailyTracker(id: number, day: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}/${day}/day`)
  }

  addNewTimeTracker(id: number, timeTracker: DailyTracker): Observable<any> {
    return this.http.post(`${this.baseUrl}/${id}`, timeTracker);
  } 
}
