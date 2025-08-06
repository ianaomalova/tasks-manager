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
  private configModal$ = new BehaviorSubject<ModalConfig[] | []>([]);

  isOpen$ = this.isOpenModal$.asObservable();
  config$ = this.configModal$.asObservable();

  open(config: ModalConfig) {
    const current = this.configModal$.value;
    this.configModal$.next([...current, config]);
    this.isOpenModal$.next(true);
  }

  close() {
    const current = this.configModal$.value;
    const updated = current.slice(0, -1);
    this.configModal$.next(updated);
    this.isOpenModal$.next(updated.length > 0);
  }

  constructor() { }
}
