import {Component, Input} from '@angular/core';
import {Tag} from 'primeng/tag';
import {Avatar} from 'primeng/avatar';
import {AvatarGroup} from 'primeng/avatargroup';
import {SmallProgressComponent} from '../../../../../components/ui/small-progress/small-progress.component';
import {Project} from '../../../../../models/Project';
import {PROJECT_STYLE_MAP} from '../../../../../configs/projects-styles.config';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-project',
  imports: [
    Tag,
    Avatar,
    AvatarGroup,
    SmallProgressComponent,
    NgClass
  ],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  @Input() project!: Project;
  projectStyleMap = PROJECT_STYLE_MAP;
}
