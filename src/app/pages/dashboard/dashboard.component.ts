import {Component} from '@angular/core';
import { CardComponent } from './components/card/card.component';
import { StatisticComponent } from './components/statistic/statistic.component';
import {LastTaskComponent} from './components/last-task/last-task.component';
import {tasks} from '../../tasks';
import {Task} from '../../models/Task';
import {FilterComponent} from './components/filter/filter.component';
import {SortComponent} from './components/sort/sort.component';
import {ActiveTab} from './ActiveTab';
import {EditTaskFormComponent} from './components/edit-task-form/edit-task-form.component';
import {LucideAngularModule} from 'lucide-angular';
import {AddSubtasksFormComponent} from './components/add-subtasks-form/add-subtasks-form.component';
import {MessageService} from 'primeng/api';
import {TimelineComponent} from './components/timeline/timeline.component';
import {DashboardService} from './dashboard.service';
import {ProjectsComponent} from './components/projects/projects.component';

@Component({
  selector: 'app-dashboard',
  imports: [CardComponent, StatisticComponent, LastTaskComponent, FilterComponent, SortComponent, EditTaskFormComponent, LucideAngularModule, AddSubtasksFormComponent, TimelineComponent, ProjectsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})

export class DashboardComponent {
  visibleEditTaskModal: boolean = false;
  visibleAddTaskModal: boolean = false;
  selectedTask!: Task;
  protected readonly tasks: Task[] = tasks;
  filteredTasks = tasks;

  constructor(private messageService: MessageService, private dashboardService: DashboardService) {
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
    this.visibleEditTaskModal = false;
    this.visibleAddTaskModal = false;
    const idx = this.tasks.findIndex(t => t.id === updatedTask.id);
    if (idx > -1) {
      this.tasks[idx] = updatedTask;
      this.filteredTasks = [...this.tasks];
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Updated successfully' });
    }
  }

  showDialog(task: Task, name: string) {
    this.selectedTask = task;
    switch (name) {
      case 'editTask':
        this.visibleEditTaskModal = true;
        break;

      case 'addTask':
        this.visibleAddTaskModal = true;
        break;
    }
  }
}
