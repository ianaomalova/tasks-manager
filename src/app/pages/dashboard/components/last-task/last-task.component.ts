import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Image, LucideAngularModule, MessageSquareText, Plane, SquareArrowOutUpRight} from 'lucide-angular';
import {ProgressComponent} from '../../../../components/ui/progress/progress.component';
import {AddButtonComponent} from '../../../../components/ui/add-button/add-button.component';
import {EditButtonComponent} from '../../../../components/ui/edit-button/edit-button.component';
import {Task} from '../../../../models/Task';
import {getIconByName} from '../../../../utils/icon.utils';
import {Avatar} from 'primeng/avatar';
import {AvatarGroup} from 'primeng/avatargroup';
import {Tooltip} from 'primeng/tooltip';

@Component({
  selector: 'app-last-task',
  imports: [
    LucideAngularModule,
    ProgressComponent,
    AddButtonComponent,
    EditButtonComponent,
    Avatar,
    AvatarGroup,
    Tooltip,
  ],
  templateUrl: './last-task.component.html',
  styleUrl: './last-task.component.scss'
})
export class LastTaskComponent {
  readonly Plane = Plane;
  readonly MessageSquareText = MessageSquareText;
  readonly Image = Image;
  readonly SquareArrowOutUpRight = SquareArrowOutUpRight;

  @Input() task!: Task;
  @Output() onEdit = new EventEmitter<Task>();
  @Output() onAdd = new EventEmitter<Task>();

  getDue(): number {
    const currentDate = new Date()
    const due = new Date(this.task.dueDate)
    const diff = Math.ceil((+due - +currentDate) / (1000 * 60 * 60 * 24));
    return diff > 0 ? diff : 0;
  }

  edit() {
    this.onEdit.emit(this.task);
  }

  add() {
    this.onAdd.emit(this.task);
  }

  protected readonly getIconByName = getIconByName;
}
