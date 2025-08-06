import { Component } from '@angular/core';
import {LucideAngularModule, Bell} from 'lucide-angular';


@Component({
  selector: 'app-notify',
  imports: [
    LucideAngularModule
  ],
  templateUrl: './notify.component.html',
  styleUrl: './notify.component.scss'
})
export class NotifyComponent {
  readonly Bell = Bell;

}
