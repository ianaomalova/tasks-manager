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
import {Dialog} from 'primeng/dialog';
import {Button} from 'primeng/button';
import {InputText} from 'primeng/inputtext';
import {LucideAngularModule, Pencil} from 'lucide-angular';

@Component({
  selector: 'app-dashboard',
  imports: [CardComponent, StatisticComponent, LastTaskComponent, FilterComponent, SortComponent, EditTaskFormComponent, Dialog, Button, InputText, LucideAngularModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  visible: boolean = false;
  selectedTask!: Task;
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
    this.visible = false;
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
  showDialog(task: Task) {
    this.selectedTask = task;
    this.visible = true;
  }

  protected readonly Pencil = Pencil;
}
