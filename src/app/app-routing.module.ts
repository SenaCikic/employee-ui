import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './pages/employee/employee.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminComponent } from './pages/admin/admin.component';
import { MonthlyTrackerComponent } from './pages/monthlyTracker/monthlyTracker.component';
import { DailyTrackerComponent } from './pages/dailyTracker/dailyTracker.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent },
  { path: 'employee/:id', component: EmployeeComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'time-tracker/:id/:month/month', component: MonthlyTrackerComponent},
  { path: 'time-tracker/:id/:day/day', component: DailyTrackerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
