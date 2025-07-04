import {Component, TemplateRef, ViewChild} from '@angular/core';
import { CardComponent } from './components/card/card.component';
import { StatisticComponent } from './components/statistic/statistic.component';
import {LastTaskComponent} from './components/last-task/last-task.component';
import {tasks} from '../../tasks';
import {Task} from '../../models/Task';
import {FilterComponent} from './components/filter/filter.component';
import {SortComponent} from './components/sort/sort.component';
import {ActiveTab} from './ActiveTab';
import {ModalService} from '../../core/services/modal.service';

@Component({
  selector: 'app-dashboard',
  imports: [CardComponent, StatisticComponent, LastTaskComponent, FilterComponent, SortComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  protected readonly tasks: Task[] = tasks;
  filteredTasks = tasks;
  @ViewChild('textTemplate') textTemplate!: TemplateRef<any>;

  constructor(private modalService: ModalService) {
  }

  changeFilter(filter: ActiveTab) {
    if (filter === 'All') {
      this.filteredTasks = tasks;
    } else {
      this.filteredTasks = this.tasks.filter(task => task.status === filter);
    }
  }

  sortChange(order: 'asc' | 'desc') {
    return this.filteredTasks.sort((a, b) => {
      const dateA = new Date(a.dueDate).getTime();
      const dateB = new Date(b.dueDate).getTime();
      return order === 'asc' ? dateA - dateB : dateB - dateA;
    });
  }

  openModal(id: number) {
    this.modalService.open({content: this.textTemplate});
  }
}
