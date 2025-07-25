import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Step, StepList, StepPanel, StepPanels, Stepper} from 'primeng/stepper';
import {NgClass} from '@angular/common';
import {Button} from 'primeng/button';
import {FormsModule} from '@angular/forms';
import {Dialog} from 'primeng/dialog';

@Component({
  selector: 'app-add-project-form',
  imports: [
    Stepper,
    StepList,
    Step,
    NgClass,
    StepPanels,
    StepPanel,
    Button,
    FormsModule,
    Dialog
  ],
  templateUrl: './add-project-form.component.html',
  styleUrl: './add-project-form.component.scss'
})
export class AddProjectFormComponent {
  activeStep: number = 1;
  @Input() visible = false;
  @Output() cancel = new EventEmitter<void>();

  onDialogClose() {
    this.visible = false;
    this.cancel.emit();
  }
}
