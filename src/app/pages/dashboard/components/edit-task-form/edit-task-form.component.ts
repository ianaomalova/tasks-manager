import {Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild} from '@angular/core';
import {Task} from '../../../../models/Task';
import {LucideAngularModule, LucideIconData, Pencil, Plane} from 'lucide-angular';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule, ValidationErrors,
  ValidatorFn,
  Validators
} from '@angular/forms';
import {IconPickerComponent} from '../../../../components/ui/icon-picker/icon-picker.component';
import {getIconByName} from '../../../../utils/icon.utils';
import {Dialog} from 'primeng/dialog';
import {InputText} from 'primeng/inputtext';
import {Message} from 'primeng/message';
import { DatePicker } from 'primeng/datepicker';
import {Popover} from 'primeng/popover';
import {OverlayPanel} from 'primeng/overlaypanel';

export function minDateValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const selectedDate = new Date(control.value);

    return selectedDate < today ? {pastDate: true} : null
  }
}

@Component({
  selector: 'app-edit-task-form',
  imports: [
    LucideAngularModule,
    FormsModule,
    ReactiveFormsModule,
    IconPickerComponent,
    Dialog,
    InputText,
    Message,
    DatePicker,
    Popover,
  ],
  templateUrl: './edit-task-form.component.html',
  styleUrl: './edit-task-form.component.scss',
})
export class EditTaskFormComponent implements OnInit {
  @Input() task!: Task;
  @Input() visible = false;
  @Output() saveTask = new EventEmitter<Task>();
  @Output() cancel = new EventEmitter<void>();
  @ViewChild('iconPicker') iconPicker!: TemplateRef<any>;
  @ViewChild('op') overlayPanel!: OverlayPanel;
  form!: FormGroup;
  selectedIcon: LucideIconData | undefined = Plane;
  formSubmitted = false;


  protected readonly Pencil = Pencil;
  protected readonly Plane = Plane;

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = this.formBuilder.group({
      title: [this.task.title, Validators.required],
      dueDate: [new Date(this.task.dueDate), [Validators.required, minDateValidator()]],
      icon: [this.task.icon || 'plane', Validators.required],
    })

    this.selectedIcon = getIconByName(this.task.icon);
  }

  save() {
    if (this.form.valid) {
      this.formSubmitted = false;
      const updatedTask: Task = {
        ...this.task,
        ...this.form.value
      };
      this.visible = false;
      this.saveTask.emit(updatedTask);
    } else {
      this.formSubmitted = true;
      this.form.markAllAsTouched();
    }
  }

  iconChange(icon: string) {
    this.form.controls['icon'].setValue(icon);
    this.selectedIcon = getIconByName(icon);
    this.overlayPanel.hide();
  }

  onDialogClose() {
    this.visible = false;
    this.cancel.emit();
  }
}
