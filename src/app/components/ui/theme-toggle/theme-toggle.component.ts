import { Component } from '@angular/core';
import {LucideAngularModule, Sun, MoonStar} from 'lucide-angular';
import {ThemeService} from '../../../core/services/theme.service';
import {Observable} from 'rxjs';
import {AsyncPipe} from '@angular/common';


@Component({
  selector: 'app-theme-toggle',
  imports: [LucideAngularModule, AsyncPipe],
  templateUrl: './theme-toggle.component.html',
  styleUrl: './theme-toggle.component.scss'
})
export class ThemeToggleComponent {
  readonly Sun = Sun;
  readonly MoonStar = MoonStar;
  isDarkMode: Observable<boolean>;

  constructor(public themeService: ThemeService) {
    this.isDarkMode = this.themeService.isDarkMode$;
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

}
