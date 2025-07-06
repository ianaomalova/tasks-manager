import {Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild} from '@angular/core';
import {Task} from '../../../../models/Task';
import {LucideAngularModule, LucideIconData, Pencil, Plane} from 'lucide-angular';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {ModalService} from '../../../../core/services/modal.service';
import {IconPickerComponent} from '../../../../components/ui/icon-picker/icon-picker.component';
import {getIconByName} from '../../../../utils/icon.utils';


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
  selectedIcon: LucideIconData | undefined = Plane;

  protected readonly Pencil = Pencil;
  protected readonly Plane = Plane;

  constructor(private formBuilder: FormBuilder, private modalService: ModalService) {

  }
  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = this.formBuilder.group({
      title: [this.task.title, Validators.required],
      dueDate: [this.task.dueDate, Validators.required],
      icon: [this.task.icon || 'plane', Validators.required],
    })

    this.selectedIcon = getIconByName(this.task.icon);
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

  iconChange(icon: string) {
    this.form.controls['icon'].setValue(icon);
    this.selectedIcon = getIconByName(icon);
  }
}
