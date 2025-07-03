import {Component, Input} from '@angular/core';
import {LucideAngularModule, Plane, MessageSquareText, Image, SquareArrowOutUpRight} from 'lucide-angular';
import {ProgressComponent} from '../../../../components/ui/progress/progress.component';
import {AddButtonComponent} from '../../../../components/ui/add-button/add-button.component';
import {EditButtonComponent} from '../../../../components/ui/edit-button/edit-button.component';
import {Status} from '../../../../models/Status';

@Component({
  selector: 'app-last-task',
  imports: [
    LucideAngularModule,
    ProgressComponent,
    AddButtonComponent,
    EditButtonComponent
  ],
  templateUrl: './last-task.component.html',
  styleUrl: './last-task.component.scss'
})
export class LastTaskComponent {
  readonly Plane = Plane;
  readonly MessageSquareText = MessageSquareText;
  readonly Image = Image;
  readonly SquareArrowOutUpRight = SquareArrowOutUpRight;

  @Input() title!: string;
  @Input() status!: Status;
  @Input() dueDate!: string;
  @Input() users!: number[];
  @Input() progress: number = 0;

  currentDate = new Date();

  getDue(): number {
    const currentDate = new Date()
    const due = new Date(this.dueDate)
    const days = currentDate.getTime() - due.getTime();
    return days > 0 ? days : 0;
  }
}
