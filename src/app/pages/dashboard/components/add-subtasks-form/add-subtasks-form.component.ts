import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Dialog} from 'primeng/dialog';
import {LucideAngularModule} from 'lucide-angular';
import {CopyPlus} from 'lucide';
import {Task} from '../../../../models/Task';
import {FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {InputText} from 'primeng/inputtext';
import {Message} from 'primeng/message';
import {Tooltip} from 'primeng/tooltip';

@Component({
  selector: 'app-add-subtasks-form',
  imports: [
    Dialog,
    LucideAngularModule,
    ReactiveFormsModule,
    InputText,
    Message,
    Tooltip
  ],
  templateUrl: './add-subtasks-form.component.html',
  styleUrl: './add-subtasks-form.component.scss'
})
export class AddSubtasksFormComponent implements OnInit {
  @Input() visible = false;
  @Input() task!: Task;
  @Output() cancel = new EventEmitter<void>();
  @Output() saveTask = new EventEmitter<Task>();

  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {

  }

  onDialogClose() {
    this.visible = false;
    this.cancel.emit();
  }

  ngOnInit() {
    this.initForm();
    this.initSubtasks();
  }

  initForm() {
    this.form = this.formBuilder.group({
      subtasks: this.formBuilder.array([])
    })
  }

  initSubtasks() {
    const tasks = this.form.get('subtasks') as FormArray;

    if(this.task.subtasks?.length) {
      this.task.subtasks?.forEach(subtask => {
        tasks.push(this.formBuilder.group({
          title: [subtask.title, Validators.required],
          status: subtask.status
        }))
      })
    }
  }

  get subtasks(): FormArray {
    return this.form.get('subtasks') as FormArray;
  }

  addSubtask() {
    this.subtasks.push(this.formBuilder.group({
      title: ['', Validators.required],
      status: 'Not Started'
    }))
  }

  removeSubtask(index: number) {
    this.subtasks.removeAt(index);
  }

  getTitleError(index: number): boolean {
    const control = this.subtasks.at(index).get('title');
    return control!.invalid && (control!.dirty || control!.touched);
  }

  save() {
    if (this.form.valid) {
      this.visible = false;
      const updatedTask: Task = {
        ...this.task,
        ...this.form.value
      };

      this.saveTask.emit(updatedTask);
    }
  }

  protected readonly CopyPlus = CopyPlus;
}
