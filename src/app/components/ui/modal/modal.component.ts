import { Component } from '@angular/core';
import {
  ModalConfig,
  ModalService,
} from '../../../core/services/modal.service';
import { Observable } from 'rxjs';
import { AsyncPipe, NgTemplateOutlet } from '@angular/common';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { LucideAngularModule, X } from 'lucide-angular';

@Component({
  selector: 'app-modal',
  imports: [AsyncPipe, NgTemplateOutlet, LucideAngularModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
  animations: [
    trigger('dialogAnimation', [
      state('open', style({ opacity: 1, transform: 'translateY(0) scale(1)' })),
      state('closed', style({ opacity: 0, transform: 'translateY(1rem) scale(0.95)' })),
      transition('closed => open', [animate('300ms ease-out')]),
      transition('open => closed', [animate('300ms ease-in')]),
    ]),
    trigger('backdropAnimation', [
      state('open', style({ opacity: 1 })),
      state('closed', style({ opacity: 0 })),
      transition('closed => open', [animate('300ms ease-out')]),
      transition('open => closed', [animate('300ms ease-in')]),
    ]),
    trigger('modalAnimation', [
      state('open', style({ visibility: 'visible', 'pointer-events': 'auto' })),
      state('closed', style({ visibility: 'hidden', 'pointer-events': 'none' })),
      transition('open => closed', [animate('300ms ease-in')]),
      transition('closed => open', [animate('300ms ease-out')]),
    ]),
  ],
})
export class ModalComponent {
  isOpen$: Observable<boolean>;
  configModal$: Observable<ModalConfig[]>;

  constructor(private modalService: ModalService) {
    this.isOpen$ = this.modalService.isOpen$;
    this.configModal$ = this.modalService.config$;
  }

  close() {
    this.modalService.close();
  }

  protected readonly X = X;
}
