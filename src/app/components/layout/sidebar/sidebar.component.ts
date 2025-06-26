import { Component } from '@angular/core';
import {LucideAngularModule, Columns2, LayoutDashboardIcon, MessageCircleMore, ChartNoAxesCombined, CalendarRange, Users, ClipboardMinus, Settings, ChevronDown} from 'lucide-angular';
import {IMenuItem} from '../../../models/menu-item.interface';
import {projects} from '../../../projects';
import {NgClass} from '@angular/common';
import {Router, RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [
    LucideAngularModule,
    RouterLink,
    RouterLinkActive,
    NgClass
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  readonly DashboardIcon = LayoutDashboardIcon;
  readonly MessageCircleMore = MessageCircleMore;
  readonly ChartNoAxesCombined = ChartNoAxesCombined;
  readonly CalendarRange = CalendarRange;
  readonly Users = Users;
  readonly ClipboardMinus = ClipboardMinus;
  readonly Settings = Settings;
  readonly ChevronDown = ChevronDown;
  readonly Columns2 = Columns2;

  readonly projects = projects;

  menuItems: IMenuItem[] = [
    { icon: this.DashboardIcon, title: 'Dashboard', link: '/dashboard' },
    { icon: this.MessageCircleMore, title: 'Messages', link: '/messages', badge: 4 },
    { icon: this.ChartNoAxesCombined, title: 'Insight', link: '/insight' },
    { icon: this.Users, title: 'Team', link: '/team' },
    { icon: this.CalendarRange, title: 'Schedule', link: '/schedule' },
    { icon: this.ClipboardMinus, title: 'Report', link: '/report' },
    { icon: this.Settings, title: 'Settings', link: '/settings' },
  ]

  constructor(private router: Router) {

  }

  isActive(link: string): boolean {
    return this.router.isActive(link, { paths: 'exact', queryParams: 'exact', fragment: 'ignored', matrixParams: 'ignored' });
  }
}
