import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'

@Component({
  selector: 'app-login-form',
  imports: [CommonModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {

  constructor() {
  }
}
