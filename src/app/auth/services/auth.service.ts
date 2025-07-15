import { Injectable } from '@angular/core';
import {catchError, from, Observable, of, switchMap, throwError} from 'rxjs';
import {
  Auth,
  createUserWithEmailAndPassword,
  User,
  updateProfile,
  signInWithEmailAndPassword,
  onAuthStateChanged
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth) { }

  login(): Observable<any> {
    return from(signInWithEmailAndPassword(this.auth, 'test2@example.com', '123456'))
      .pipe(
        switchMap((userCredential) => {
          const user = userCredential.user;
          return this.updateTokenObservable(user);
        })
      )
  }

  registerUser(email: string, password: string, firstName: string, lastName: string): Observable<User> {
    return from(createUserWithEmailAndPassword(this.auth, email, password))
      .pipe(
        switchMap(userCredential => {
          const user = userCredential.user;
          return from(updateProfile(user, {displayName: `${firstName} ${lastName}`}))
            .pipe(
              switchMap(() => this.updateTokenObservable(user))
            )
        })
      )
  }

  private updateTokenObservable(user: User): Observable<User> {
    return from(user.getIdToken(true)).pipe(
      switchMap((token) => {
        localStorage.setItem('token', token);
        return of(user);
      })
    );
  }
}
