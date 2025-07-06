import {Status} from './Status';
import {LucideIconData} from 'lucide-angular';

export interface Task {
  id: number;
  icon: any;
  title: string,
  status: Status,
  progress: number,
  dueDate: string,
  users: number[]
}
