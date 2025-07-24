import {Component, OnInit} from '@angular/core';
import {NavigateBtnComponent} from '../../../../components/ui/navigate-btn/navigate-btn.component';
import {ArrowLeft, ArrowRight, LucideAngularModule} from 'lucide-angular';
import {ProjectComponent} from './project/project.component';
import {Project} from '../../../../models/Project';
import {projects} from '../../../../proj';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [
    NavigateBtnComponent,
    LucideAngularModule,
    ProjectComponent,
    NgClass
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = projects;
  itemsPerPage = 3;
  currentIndex = 0;
  maxIndex = 0;
  groupedProjects: Project[][] = []

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
    console.log(this.currentIndex);
  }

  nextSlide() {
    if (this.currentIndex < this.maxIndex) this.currentIndex++
    console.log(this.currentIndex);
  }

  protected readonly ArrowRight = ArrowRight;
  protected readonly ArrowLeft = ArrowLeft;
}
