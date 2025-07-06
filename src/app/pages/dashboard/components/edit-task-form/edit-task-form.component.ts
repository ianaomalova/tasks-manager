import {Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild} from '@angular/core';
import {Task} from '../../../../models/Task';
import {LucideAngularModule, Pencil} from 'lucide-angular';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {ModalService} from '../../../../core/services/modal.service';
import {IconPickerComponent} from '../../../../components/ui/icon-picker/icon-picker.component';


@Component({
  selector: 'app-edit-task-form',
  imports: [
    LucideAngularModule,
    FormsModule,
    ReactiveFormsModule,
    IconPickerComponent,
  ],
  templateUrl: './edit-task-form.component.html',
  styleUrl: './edit-task-form.component.scss',
})
export class EditTaskFormComponent implements OnInit {
  @Input() task!: Task;
  @Output() saveTask = new EventEmitter<Task>();
  @ViewChild('editIcon') editIcon!: TemplateRef<any>;
  form!: FormGroup;
  isIconsVisible = false;
  selectedIcon: any;

  protected readonly Pencil = Pencil;

  constructor(private formBuilder: FormBuilder, private modalService: ModalService) {

  }
  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = this.formBuilder.group({
      title: [this.task.title, Validators.required],
      dueDate: [this.task.dueDate, Validators.required],
      icon: [this.task.icon, Validators.required],
    })
  }

  save() {
    if (this.form.valid) {
      const updatedTask: Task = {
        ...this.task,
        ...this.form.value
      };
      this.modalService.close();
      this.saveTask.emit(updatedTask);
    } else {
      this.form.markAllAsTouched();
    }
  }

  openIcons() {
    this.isIconsVisible = !this.isIconsVisible;
  }

  iconChange(icon: any) {
    this.selectedIcon = icon;
    console.log(icon);
  }
}
