import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NavigateBtnComponent} from '../../../../components/ui/navigate-btn/navigate-btn.component';
import {ArrowLeft, ArrowRight, LucideAngularModule} from 'lucide-angular';
import {ProjectComponent} from './project/project.component';
import {Project} from '../../../../models/Project';
import {projects} from '../../../../proj';
import {NgClass} from '@angular/common';
import {AddProjectFormComponent} from '../add-project-form/add-project-form.component';

@Component({
  selector: 'app-projects',
  imports: [
    NavigateBtnComponent,
    LucideAngularModule,
    ProjectComponent,
    NgClass,
    AddProjectFormComponent
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = projects;
  itemsPerPage = 4;
  currentIndex = 0;
  maxIndex = 0;
  groupedProjects: Project[][] = []
  isOpenAddModal = false;

  ngOnInit() {
    this.groupProjects()
  }

  groupProjects() {
    for (let i = 0; i < this.projects.length; i+=this.itemsPerPage) {
      this.groupedProjects.push(this.projects.slice(i, i + this.itemsPerPage))
    }
    this.maxIndex = this.groupedProjects.length - 1
  }

  prevSlide() {
    if (this.currentIndex > 0) this.currentIndex--
  }

  nextSlide() {
    if (this.currentIndex < this.maxIndex) this.currentIndex++
  }

  protected readonly ArrowRight = ArrowRight;
  protected readonly ArrowLeft = ArrowLeft;

  addProject() {
    this.isOpenAddModal = true;
  }
}
