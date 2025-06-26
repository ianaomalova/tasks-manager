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
    component: DashboardComponent,
    data: { title: 'Dashboard' },
  },
  {
    path: 'insight',
    component: InsightsComponent,
    data: { title: 'Insight' },
  },
  {
    path: 'messages',
    component: MessagesComponent,
    data: { title: 'Messages' },
  },
  {
    path: 'report',
    component: ReportsComponent,
    data: { title: 'Report' },
  },
  {
    path: 'settings',
    component: SettingsComponent,
    data: { title: 'Settings' },
  },
  {
    path: 'schedule',
    component: ScheduleComponent,
    data: { title: 'Schedule' },
  },
  {
    path: 'team',
    component: TeamComponent,
    data: { title: 'Team' },
  },
];
