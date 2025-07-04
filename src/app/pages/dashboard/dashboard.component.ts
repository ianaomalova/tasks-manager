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
import {EditTaskFormComponent} from './components/edit-task-form/edit-task-form.component';

@Component({
  selector: 'app-dashboard',
  imports: [CardComponent, StatisticComponent, LastTaskComponent, FilterComponent, SortComponent, EditTaskFormComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  protected readonly tasks: Task[] = tasks;
  filteredTasks = tasks;
  @ViewChild('editTaskForm') editTaskForm!: TemplateRef<any>;

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

  updateTask(updatedTask: Task) {
    const idx = this.tasks.findIndex(t => t.id === updatedTask.id);
    if (idx > -1) {
      this.tasks[idx] = updatedTask;
      this.filteredTasks = [...this.tasks];
    }
  }

  openModal(task: Task) {
    this.modalService.open({
      content: this.editTaskForm,
      context: {task}
    });
  }
}
