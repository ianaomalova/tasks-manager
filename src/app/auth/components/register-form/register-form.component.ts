import {Component, EventEmitter, Output} from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-register-form',
  imports: [],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.scss'
})
export class RegisterFormComponent {
  @Output() change: EventEmitter<void> = new EventEmitter();
  constructor(private authService: AuthService) {
  }
  register() {
    this.authService.registerUser('biba1234@mail.com', '123456', 'iana', 'bebebe').subscribe(res => console.log(res));
  }

  changeFormMode() {
    this.change.emit();
  }
}
