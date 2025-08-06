import {Status} from './Status';

export interface SubTask {
  title: string;
  status: Status;
}

export interface Task {
  id: string;
  ownerId: string;
  description?: string;
  icon: string;
  title: string,
  status: Status,
  progress: number,
  dueDate: string,
  users: string[]
  subtasks?: SubTask []
}
