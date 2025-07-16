import {Component, HostListener, OnInit} from '@angular/core';
import {LucideAngularModule, Columns2, ChevronDown} from 'lucide-angular';
import {projects} from '../../../projects';
import {NgClass} from '@angular/common';
import {Router, RouterLink, RouterLinkActive} from '@angular/router';
import {menuItems} from '../../../configs/nav.config';
import {getIconByName} from '../../../utils/icon.utils';
import {Avatar} from 'primeng/avatar';
import {Popover} from 'primeng/popover';
import {AuthService} from '../../../auth/auth.service';

@Component({
  selector: 'app-sidebar',
  imports: [
    LucideAngularModule,
    RouterLink,
    RouterLinkActive,
    NgClass,
    Avatar,
    Popover
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {
  isMenuOpen = true;
  windowWidth: number = window.innerWidth;
  readonly menuItems = menuItems;
  readonly projects = projects;

  readonly ChevronDown = ChevronDown;
  readonly Columns2 = Columns2;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.windowWidth = window.innerWidth;
    this.isMenuOpen = window.innerWidth >= 1024;
  }

  constructor(private router: Router, private authService: AuthService,) {

  }

  ngOnInit() {
    this.isMenuOpen = localStorage.getItem('menu') === 'true';
  }

  isActive(link: string): boolean {
    return this.router.isActive(link, { paths: 'exact', queryParams: 'exact', fragment: 'ignored', matrixParams: 'ignored' });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    localStorage.setItem('menu', JSON.stringify(this.isMenuOpen));
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/auth']);
  }

  get email() {
    return this.authService.getCurrentUser()?.email;
  }

  get userName() {
    return this.authService.getCurrentUser()?.displayName;
  }

  protected readonly getIconByName = getIconByName;
}
