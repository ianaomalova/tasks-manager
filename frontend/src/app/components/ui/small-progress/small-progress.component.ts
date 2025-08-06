import {Component, Input} from '@angular/core';
import {NgStyle} from '@angular/common';

@Component({
  selector: 'app-small-progress',
  imports: [
    NgStyle
  ],
  templateUrl: './small-progress.component.html',
  styleUrl: './small-progress.component.scss'
})
export class SmallProgressComponent {
  @Input() style!: string;
}
