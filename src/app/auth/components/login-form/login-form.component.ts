import { CommonModule } from '@angular/common'
import {Component, OnInit} from '@angular/core'
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-login-form',
  imports: [CommonModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent implements OnInit{

  constructor(private authService: AuthService) {
  }

  login() {
    this.authService.login().subscribe(res => console.log(res));
  }

  ngOnInit() {
    // this.authService.login().subscribe(res => console.log(res));
  }
}
