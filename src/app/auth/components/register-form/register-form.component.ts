import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register-form',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.scss'
})
export class RegisterFormComponent implements OnInit {
  @Output() changeMode: EventEmitter<void> = new EventEmitter();
  form!: FormGroup

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
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirm_password: ['', [Validators.required]]
    })
  }

  register() {
    if (this.form.valid) {
      const {first_name, last_name, email, password} = this.form.value;
      this.authService.registerUser(email, password, first_name, last_name).subscribe({
        next: (res => {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Registered successfully' });
          this.router.navigate(['/']);
        }),
        error: err => {{
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong' });
        }}
      });
    }
  }

  changeFormMode() {
    this.changeMode.emit();
  }
}
