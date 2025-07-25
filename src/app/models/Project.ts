import {Status} from './Status';
import {ProjectColor} from '../configs/projects-styles.config';

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
  color: ProjectColor;
}
