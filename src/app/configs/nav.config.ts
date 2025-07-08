import {IMenuItem} from '../models/MenuItem';

export const menuItems: IMenuItem[] = [
  { icon: 'layout-dashboard', title: 'Dashboard', link: '/dashboard' },
  { icon: 'message-circle-more', title: 'Messages', link: '/messages', badge: 4 },
  { icon: 'chart-no-axes-combined', title: 'Insight', link: '/insight' },
  { icon: 'users', title: 'Team', link: '/team' },
  { icon: 'calendar-range', title: 'Schedule', link: '/schedule' },
  { icon: 'clipboard-minus', title: 'Report', link: '/report' },
  { icon: 'settings', title: 'Settings', link: '/settings' },
]
