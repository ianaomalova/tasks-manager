import { CommonModule } from '@angular/common'
import {Component, EventEmitter, OnInit, Output} from '@angular/core'
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-login-form',
  imports: [CommonModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent implements OnInit {
  @Output() change: EventEmitter<void> = new EventEmitter();

  constructor(private authService: AuthService) {
  }

  login() {
    this.authService.login().subscribe(res => console.log(res));
  }

  changeFormMode() {
    this.change.emit();
  }

  ngOnInit() {
    // this.authService.login().subscribe(res => console.log(res));
  }
}
