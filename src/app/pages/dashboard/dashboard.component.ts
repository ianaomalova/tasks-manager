import { Component } from '@angular/core';
import { CardComponent } from './components/card/card.component';
import { StatisticComponent } from './components/statistic/statistic.component';
import {LastTaskComponent} from './components/last-task/last-task.component';
import {tasks} from '../../tasks';
import {Task} from '../../models/Task';

@Component({
  selector: 'app-dashboard',
  imports: [CardComponent, StatisticComponent, LastTaskComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  protected readonly tasks: Task[] = tasks;
}
