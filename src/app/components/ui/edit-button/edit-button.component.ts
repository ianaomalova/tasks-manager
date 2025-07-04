import {Component, EventEmitter, Output} from '@angular/core';
import {LucideAngularModule, Pencil} from 'lucide-angular';

@Component({
  selector: 'app-edit-button',
  imports: [
    LucideAngularModule
  ],
  templateUrl: './edit-button.component.html',
  styleUrl: './edit-button.component.scss'
})
export class EditButtonComponent {
  readonly Pencil = Pencil;
  @Output() onEdit = new EventEmitter();

  edit() {
    this.onEdit.emit();
  }
}
