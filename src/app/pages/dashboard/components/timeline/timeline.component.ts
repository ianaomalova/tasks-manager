import { Component } from '@angular/core';
import {AvatarGroup} from 'primeng/avatargroup';
import {Avatar} from 'primeng/avatar';
import {TimelineCardComponent} from './timeline-card/timeline-card.component';

@Component({
  selector: 'app-timeline',
  imports: [
    AvatarGroup,
    Avatar,
    TimelineCardComponent
  ],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent {

}
