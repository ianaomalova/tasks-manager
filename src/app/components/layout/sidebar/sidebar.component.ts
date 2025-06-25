import { Component } from '@angular/core';
import {LucideAngularModule, LayoutDashboardIcon, MessageCircleMore, ChartNoAxesCombined, CalendarRange, Users, ClipboardMinus, Settings, ChevronDown} from 'lucide-angular';
import {IMenuItem} from '../../../models/menu-item.interface';
import {projects} from '../../../projects';
import {NgClass} from '@angular/common';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [
    LucideAngularModule,
    NgClass,
    RouterLink,
    RouterLinkActive
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

  menuItems: IMenuItem[] = [
    { icon: this.DashboardIcon, title: 'Dashboard', link: '/dashboard' },
    { icon: this.MessageCircleMore, title: 'Messages', link: '/messages' },
    { icon: this.ChartNoAxesCombined, title: 'Insight', link: '/insight' },
    { icon: this.Users, title: 'Team', link: '/team' },
    { icon: this.CalendarRange, title: 'Schedule', link: '/schedule' },
    { icon: this.ClipboardMinus, title: 'Report', link: '/report' },
    { icon: this.Settings, title: 'Settings', link: '/settings' },
  ]
  protected readonly projects = projects;
}
