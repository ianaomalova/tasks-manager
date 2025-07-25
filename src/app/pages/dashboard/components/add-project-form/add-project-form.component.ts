import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Step, StepList, StepPanel, StepPanels, Stepper} from 'primeng/stepper';
import {NgClass, NgStyle} from '@angular/common';
import {Button} from 'primeng/button';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import {Dialog} from 'primeng/dialog';
import {LucideAngularModule, Plus, Target, Trash, X} from 'lucide-angular';
import {PROJECT_STYLE_MAP} from '../../../../configs/projects-styles.config';

@Component({
  selector: 'app-add-project-form',
  imports: [
    FormsModule,
    Dialog,
    LucideAngularModule,
    NgStyle,
    ReactiveFormsModule,
    NgClass
  ],
  templateUrl: './add-project-form.component.html',
  styleUrl: './add-project-form.component.scss'
})
export class AddProjectFormComponent {
  currentStep: number = 1;
  isAddingTask: boolean = false;
  newTaskTitle = '';

  @Input() visible = false;
  @Output() cancel = new EventEmitter<void>();
  readonly bgColors = Object.values(PROJECT_STYLE_MAP).map(style => style.bgColor);

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      title: new FormControl('', Validators.required),
      description: new FormControl(''),
      deadline: new FormControl('', Validators.required),
      color: new FormControl('#6366f1', Validators.required),
      tasks: this.formBuilder.array([])
    })
  }

  get tasks(): FormArray {
    return this.form.get('tasks') as FormArray;
  }

  addTask() {
    if (!this.newTaskTitle.trim()) return;

    this.tasks.push(this.formBuilder.control(this.newTaskTitle, Validators.required));
    this.newTaskTitle = '';
    this.isAddingTask = false;
  }

  setColor(color: string) {
    this.form.get('color')!.setValue(color);
  }

  get currentColor() {
    return this.form.get('color')?.value;
  }

  onDialogClose() {
    this.visible = false;
    this.cancel.emit();
  }

  cancelAddTask() {
    this.newTaskTitle = '';
    this.isAddingTask = false;
  }

  removeTask(index: number) {
    this.tasks.removeAt(index);
  }

  validateTitle(): boolean {
    return !!this.form.get('title')?.hasError('required');
  }

  validateDeadline(): boolean {
    return !!this.form.get('deadline')?.hasError('required');
  }

  validateOneStep() {
    return this.validateDeadline() || this.validateTitle();
  }

  protected readonly Trash = Trash;
  protected readonly X = X;
  protected readonly Target = Target;
  protected readonly Plus = Plus;
}
