import { Component } from '@angular/core';
import {LoginFormComponent} from '../login-form/login-form.component';
import {RegisterFormComponent} from '../register-form/register-form.component';
import {NgSwitch, NgSwitchCase} from '@angular/common';
import {animate, query, stagger, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-auth-page',
  imports: [
    LoginFormComponent,
    RegisterFormComponent,
    NgSwitch,
    NgSwitchCase
  ],
  templateUrl: './auth-page.component.html',
  styleUrl: './auth-page.component.scss',
  animations: [
    trigger('flipAnimation', [
      transition('login => register', [
        animate('300ms ease-in-out', style({ transform: 'rotateY(90deg)' })),
        animate('0ms', style({ transform: 'rotateY(-90deg)' })),
        animate('300ms ease-in-out', style({ transform: 'rotateY(0deg)' }))
      ]),
      transition('register => login', [
        animate('300ms ease-in-out', style({ transform: 'rotateY(-90deg)' })),
        animate('0ms', style({ transform: 'rotateY(90deg)' })),
        animate('300ms ease-in-out', style({ transform: 'rotateY(0deg)' }))
      ])
    ])
  ],
})
export class AuthPageComponent {
  formType: 'login' | 'register' = 'login';

  changeType() {
    this.formType === 'login' ? this.formType = 'register' : this.formType = 'login';
  }
}
