import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MonthlyTracker } from 'src/app/model/MonthlyTracker';
import { TimeTrackerService } from 'src/app/service/timeTracker.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-monthlyTracker',
  templateUrl: './monthlyTracker.component.html',
  styleUrls: ['./monthlyTracker.component.css'],
})
export class MonthlyTrackerComponent implements OnInit {
  monthlyTracker: Observable<MonthlyTracker[]>;
  id: number;
  month: String;

  displayedColumns: string[] = [
    'day',
    'totalWorkingTime',
    'totalPauseTime',
    'details',
  ];

  
  constructor(
    private router: Router,
    private timeTrackerService: TimeTrackerService,
    private route: ActivatedRoute
  ) {}

  
  ngOnInit(): void {
    // this.monthlyTracker = new MonthlyTracker();

    this.id = this.route.snapshot.params['id'];
    this.month = this.route.snapshot.params['month'];

    this.getMonthlyTracker();
  }

  getMonthlyTracker() {
    this.timeTrackerService.getMonthlyTracker(this.id, this.month).subscribe(
      (data) => {
        this.monthlyTracker = data;
      },
      (error) => console.log(error)
    );
  }

  navigateToDailyTracker(id: number, day: number) {
    this.router.navigate(['time-tracker', id, day, 'day']);
  }


}
