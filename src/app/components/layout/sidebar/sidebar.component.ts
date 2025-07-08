import { Component } from '@angular/core';
import {LucideAngularModule, Columns2, ChevronDown} from 'lucide-angular';
import {projects} from '../../../projects';
import {NgClass} from '@angular/common';
import {Router, RouterLink, RouterLinkActive} from '@angular/router';
import {menuItems} from '../../../configs/nav.config';
import {getIconByName} from '../../../utils/icon.utils';
import {Avatar} from 'primeng/avatar';

@Component({
  selector: 'app-sidebar',
  imports: [
    LucideAngularModule,
    RouterLink,
    RouterLinkActive,
    NgClass,
    Avatar
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  isMenuOpen = true;
  readonly menuItems = menuItems;
  readonly projects = projects;

  readonly ChevronDown = ChevronDown;
  readonly Columns2 = Columns2;

  constructor(private router: Router) {

  }

  isActive(link: string): boolean {
    return this.router.isActive(link, { paths: 'exact', queryParams: 'exact', fragment: 'ignored', matrixParams: 'ignored' });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  protected readonly getIconByName = getIconByName;
}
