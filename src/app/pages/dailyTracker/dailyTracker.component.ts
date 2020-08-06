import { Component, OnInit } from '@angular/core';
import { DailyTracker } from 'src/app/model/dailyTracker';
import { Router, ActivatedRoute } from '@angular/router';
import { TimeTrackerService } from 'src/app/service/timeTracker.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dailyTracker',
  templateUrl: './dailyTracker.component.html',
  styleUrls: ['./dailyTracker.component.css']
})
export class DailyTrackerComponent implements OnInit {
  dailyTracker: Observable<DailyTracker[]>;
  id: number;
  day: number;

  displayedColumns: string[] = [
    'actionPurposeCode',
    'actionStartTime',
  ]

  
  constructor(
    private router: Router,
    private timeTrackerService: TimeTrackerService,
    private route: ActivatedRoute
  ) { }

  
  ngOnInit(): void {
    // this.monthlyTracker = new DailyTracker();

    this.id = this.route.snapshot.params['id'];
    this.day = this.route.snapshot.params['day'];

    this.getDailyTracker();
  }

   getDailyTracker() {
    this.timeTrackerService.getDailyTracker(this.id, this.day).subscribe(
      (data) => {
        this.dailyTracker = data;
      },
      (error) => console.log(error)
    );
  } 
}
