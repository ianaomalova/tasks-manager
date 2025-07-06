import {Status} from './Status';

export interface Task {
  id: number;
  icon: string;
  title: string,
  status: Status,
  progress: number,
  dueDate: string,
  users: number[]
}
