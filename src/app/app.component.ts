import { Component } from '@angular/core';
import {MainLayoutComponent} from './components/layout/main-layout/main-layout.component';
import {Toast} from 'primeng/toast';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [MainLayoutComponent, Toast, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
