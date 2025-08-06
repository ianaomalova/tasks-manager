import {IMenuItem} from '../models/MenuItem';

export const menuItems: IMenuItem[] = [
  { icon: 'layout-dashboard', title: 'Дашборд', link: '/dashboard' },
  { icon: 'message-circle-more', title: 'Сообщения', link: '/messages', badge: 4 },
  { icon: 'chart-no-axes-combined', title: 'Insight', link: '/insight' },
  { icon: 'users', title: 'Команда', link: '/team' },
  { icon: 'calendar-range', title: 'Календарь', link: '/schedule' },
  { icon: 'clipboard-minus', title: 'Отчетность', link: '/report' },
  { icon: 'settings', title: 'Настройки', link: '/settings' },
  { icon: 'user', title: 'Профиль', link: '/profile' },
]
