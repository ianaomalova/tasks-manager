import {Component, Input} from '@angular/core';
import {Tag} from 'primeng/tag';
import {Avatar} from 'primeng/avatar';
import {AvatarGroup} from 'primeng/avatargroup';
import {SmallProgressComponent} from '../../../../../components/ui/small-progress/small-progress.component';
import {Project} from '../../../../../models/Project';

@Component({
  selector: 'app-project',
  imports: [
    Tag,
    Avatar,
    AvatarGroup,
    SmallProgressComponent
  ],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  @Input() project!: Project;
}
