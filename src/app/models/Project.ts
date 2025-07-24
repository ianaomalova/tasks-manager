import {Status} from './Status';

export interface Project {
  id: string;
  title: string;
  description: string;
  status: Status;
  dueDate: string;
  createdAt: string;
  authorId: string
  assignedUserIds: string[];
  taskIds: string[];
}
