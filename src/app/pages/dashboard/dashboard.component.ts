import { Component } from '@angular/core';
import {ThemeToggleComponent} from '../../components/ui/theme-toggle/theme-toggle.component';

@Component({
  selector: 'app-dashboard',
  imports: [
    ThemeToggleComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
