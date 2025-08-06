import {Component, Input} from '@angular/core';
import {Task} from '../../../../../models/Task';
import {LucideAngularModule} from 'lucide-angular';
import {getIconByName} from '../../../../../utils/icon.utils';
import {Avatar} from 'primeng/avatar';
import {AvatarGroup} from 'primeng/avatargroup';

@Component({
  selector: 'app-timeline-card',
  imports: [
    LucideAngularModule,
    Avatar,
    AvatarGroup
  ],
  templateUrl: './timeline-card.component.html',
  styleUrl: './timeline-card.component.scss'
})
export class TimelineCardComponent {
  // @Input() task!: Task;

  task = {
    id: 1,
    icon: 'star',
    title: 'Design Main Page',
    status: 'In Progress',
    progress: 60,
    dueDate: '2025-07-15',
    users: [101, 102],
    subtasks: [
      { title: 'Subtask 1', status: 'Not Started' },
      { title: 'Subtask 2', status: 'In Progress' },
      { title: 'Subtask 3', status: 'Completed' },
    ],
  }

  protected readonly getIconByName = getIconByName;
}
