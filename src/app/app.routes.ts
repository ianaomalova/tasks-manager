import { Routes } from '@angular/router';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {InsightsComponent} from './pages/insight/insights.component';
import {MessagesComponent} from './pages/messages/messages.component';
import {ReportsComponent} from './pages/reports/reports.component';
import {SettingsComponent} from './pages/settings/settings.component';
import {ScheduleComponent} from './pages/schedule/schedule.component';
import {TeamComponent} from './pages/team/team.component';
import {AuthPageComponent} from './auth/components/auth-page/auth-page.component';
import {MainLayoutComponent} from './components/layout/main-layout/main-layout.component';
import {AuthLayoutComponent} from './auth/components/auth-layout/auth-layout.component';
import {AuthGuard} from './auth/auth.guard';
import {ProfileComponent} from './pages/profile/profile.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: { title: 'Дашборд' },
        canActivate: [AuthGuard]
      },
      {
        path: 'insight',
        component: InsightsComponent,
        data: { title: 'Insight' },
        canActivate: [AuthGuard]
      },
      {
        path: 'messages',
        component: MessagesComponent,
        data: { title: 'Сообщения' },
        canActivate: [AuthGuard]
      },
      {
        path: 'report',
        component: ReportsComponent,
        data: { title: 'Отчетность' },
        canActivate: [AuthGuard]
      },
      {
        path: 'settings',
        component: SettingsComponent,
        data: { title: 'Настройки' },
        canActivate: [AuthGuard]
      },
      {
        path: 'schedule',
        component: ScheduleComponent,
        data: { title: 'Календарь' },
        canActivate: [AuthGuard]
      },
      {
        path: 'team',
        component: TeamComponent,
        data: { title: 'Команда' },
        canActivate: [AuthGuard]
      },
      {
        path: 'profile',
        component: ProfileComponent,
        data: { title: 'Профиль' },
        canActivate: [AuthGuard]
      },
    ]
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        component: AuthPageComponent
      }
    ]
  }
];
