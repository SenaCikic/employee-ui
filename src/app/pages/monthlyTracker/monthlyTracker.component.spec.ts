import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyTrackerComponent } from './monthlyTracker.component';

describe('MonthTrackerComponent', () => {
  let component: MonthlyTrackerComponent;
  let fixture: ComponentFixture<MonthlyTrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyTrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
