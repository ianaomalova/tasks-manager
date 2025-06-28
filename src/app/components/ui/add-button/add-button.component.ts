import { Component } from '@angular/core';
import {LucideAngularModule, Plus} from 'lucide-angular';

@Component({
  selector: 'app-add-button',
  imports: [
    LucideAngularModule
  ],
  templateUrl: './add-button.component.html',
  styleUrl: './add-button.component.scss'
})
export class AddButtonComponent {
  readonly Plus = Plus;

}
