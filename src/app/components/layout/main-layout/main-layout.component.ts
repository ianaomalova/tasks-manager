import { Component } from '@angular/core';
import {SidebarComponent} from '../sidebar/sidebar.component';
import {ChatComponent} from '../../chat/chat.component';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-main-layout',
  imports: [
    SidebarComponent,
    ChatComponent,
    RouterOutlet
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {

}
