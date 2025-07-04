import {Injectable, TemplateRef} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

export interface ModalConfig {
  content: TemplateRef<any>;
  context?: any;
}

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private isOpenModal$ = new BehaviorSubject<boolean>(false);
  private configModal$ = new BehaviorSubject<ModalConfig | null>(null);

  isOpen$ = this.isOpenModal$.asObservable();
  config$ = this.configModal$.asObservable();

  open(config: ModalConfig) {
    this.configModal$.next(config);
    this.isOpenModal$.next(true);
  }

  close() {
    this.isOpenModal$.next(false);
    this.configModal$.next(null);
  }

  constructor() { }
}
