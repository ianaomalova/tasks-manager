import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-navigate-btn',
  imports: [
  ],
  templateUrl: './navigate-btn.component.html',
  styleUrl: './navigate-btn.component.scss'
})
export class NavigateBtnComponent {
  @Input() disabled = false;
}
