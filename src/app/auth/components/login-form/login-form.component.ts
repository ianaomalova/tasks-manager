import { CommonModule } from '@angular/common'
import {Component, EventEmitter, OnInit, Output} from '@angular/core'
import {AuthService} from '../../services/auth.service';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent implements OnInit {
  @Output() changeMode: EventEmitter<void> = new EventEmitter();
  form!: FormGroup;

  constructor(private authService: AuthService,
              private formBuilder: FormBuilder,
              private messageService: MessageService,
              private router: Router) {
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    })
  }

  login() {
    const { email, password } = this.form.value;
    this.authService.login(email, password).subscribe({
      next: () => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Logged in successfully' });
        this.router.navigate(['/']);
      },
      error: err => {{
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong' });
      }}
    });
  }

  changeFormMode() {
    this.changeMode.emit();
  }
}
