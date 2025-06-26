import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() info: string = '94';
  @Input() title: string = 'Active project';
  @Input() img: string = '/png/projects/active-projects.svg';
  @Input() color: string = 'bg-[var(--purple-light)]';
}
