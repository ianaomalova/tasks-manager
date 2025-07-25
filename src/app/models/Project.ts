import {ProjectColor} from '../configs/projects-styles.config';

export type ProjectStatus = 'Not Started' | 'In Progress'| 'Complete' | 'On Paused' | 'Archive';

export interface Project {
  id: string;
  title: string;
  description: string;
  status: ProjectStatus;
  dueDate: string;
  createdAt: string;
  authorId: string
  assignedUserIds: string[];
  taskIds: string[];
  color: ProjectColor;
}

