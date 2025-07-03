import {Status} from './Status';

export interface Task {
  id: number;
  title: string,
  status: Status,
  progress: number,
  dueDate: string,
  users: number[]
}
