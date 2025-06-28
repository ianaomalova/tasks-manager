import {Component, Input} from '@angular/core';
import {LucideAngularModule, Plane, MessageSquareText, Image, SquareArrowOutUpRight} from 'lucide-angular';
import {ProgressComponent} from '../../../../components/ui/progress/progress.component';
import {AddButtonComponent} from '../../../../components/ui/add-button/add-button.component';
import {EditButtonComponent} from '../../../../components/ui/edit-button/edit-button.component';

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
  @Input() progress: number = 0;
}
