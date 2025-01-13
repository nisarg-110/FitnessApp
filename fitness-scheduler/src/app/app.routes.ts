import { Routes } from '@angular/router';
import { AddClassComponent } from './add-class/add-class.component';
import { ClassScheduleComponent } from './class-schedule/class-schedule.component';
import { AnalyticsDashboardComponent } from './analytics-dashboard/analytics-dashboard.component';

export const routes: Routes = [
  { path: '', redirectTo: '/classes', pathMatch: 'full' },
  { path: 'add-class', component: AddClassComponent },
  { path: 'classes', component: ClassScheduleComponent },
  { path: 'analytics', component: AnalyticsDashboardComponent }
];