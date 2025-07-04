import { Component } from '@angular/core';
import {MainLayoutComponent} from './components/layout/main-layout/main-layout.component';
import {ModalComponent} from './components/ui/modal/modal.component';

@Component({
  selector: 'app-root',
  imports: [MainLayoutComponent, ModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
