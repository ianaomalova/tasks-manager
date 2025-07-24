import { NgClass } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
    AbstractControl,
    FormBuilder,
    FormGroup,
    ReactiveFormsModule,
    ValidationErrors,
    ValidatorFn,
    Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Message } from 'primeng/message';
import { AuthService } from '../../auth.service';

export function passwordMatchValidator(passwordField: string, confirmPasswordField: string): ValidatorFn {
  return (formGroup: AbstractControl): ValidationErrors | null => {
    const passwordControl = formGroup.get(passwordField);
    const confirmPasswordControl = formGroup.get(confirmPasswordField);

    if (!passwordControl || !confirmPasswordControl) {
      return null;
    }

    if (confirmPasswordControl.errors && !confirmPasswordControl.errors['passwordMismatch']) {
      return null; // если есть другие ошибки, не перезаписываем их
    }

    if (passwordControl.value !== confirmPasswordControl.value) {
      confirmPasswordControl.setErrors({ passwordMismatch: true });
    } else {
      confirmPasswordControl.setErrors(null);
    }

    return null;
  };
}


@Component({
  selector: 'app-register-form',
  imports: [
    ReactiveFormsModule,
    NgClass,
    Message
  ],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.scss'
})
export class RegisterFormComponent implements OnInit {
  @Output() changeMode: EventEmitter<void> = new EventEmitter();
  form!: FormGroup;
  formSubmitted = false;

  constructor(private authService: AuthService,
              private formBuilder: FormBuilder,
              private messageService: MessageService,
              private router: Router) {
  }

  get passwordMatch() {
    return this.form.hasError('passwordMismatch');
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
    }, {
        validators: passwordMatchValidator('password', 'confirm_password')
      }
    )
  }

  register() {
    this.formSubmitted = true;

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
    } else {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Fill the fields correctly' });
    }
  }

  changeFormMode() {
    this.changeMode.emit();
  }
}
