import { Routes } from '@angular/router';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {InsightsComponent} from './pages/insight/insights.component';
import {MessagesComponent} from './pages/messages/messages.component';
import {ReportsComponent} from './pages/reports/reports.component';
import {SettingsComponent} from './pages/settings/settings.component';
import {ScheduleComponent} from './pages/schedule/schedule.component';
import {TeamComponent} from './pages/team/team.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'insight',
    component: InsightsComponent
  },
  {
    path: 'messages',
    component: MessagesComponent
  },
  {
    path: 'report',
    component: ReportsComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  },
  {
    path: 'schedule',
    component: ScheduleComponent
  },
  {
    path: 'team',
    component: TeamComponent
  },
];
