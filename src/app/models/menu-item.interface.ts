import {LucideIconData} from 'lucide-angular';

export interface IMenuItem {
  icon: LucideIconData;
  link: string;
  title: string;
  badge?: number
}
