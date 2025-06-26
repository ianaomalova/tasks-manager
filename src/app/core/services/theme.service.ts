import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isDarkTheme$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  isDarkMode$ = this.isDarkTheme$.asObservable();

  constructor() {
    this.isDarkTheme$.next(localStorage.getItem('theme') === 'dark');
    this.updateTheme();
  }

  updateTheme() {
    if (this.isDarkTheme$.value) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }

  toggleTheme() {
    this.isDarkTheme$.next(!this.isDarkTheme$.value);
    this.updateTheme();
  }
}
