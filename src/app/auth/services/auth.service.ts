import { Injectable } from '@angular/core';
import {BehaviorSubject, from, map, Observable, switchMap} from 'rxjs';
import {
  Auth,
  createUserWithEmailAndPassword,
  User,
  updateProfile,
  signInWithEmailAndPassword,
  onAuthStateChanged, signOut
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSubject$ = new BehaviorSubject<User | null>(null);
  user$ = this.userSubject$.asObservable();

  constructor(private auth: Auth) {
    onAuthStateChanged(this.auth, user => {
      this.userSubject$.next(user);
    })
  }

  login(email: string, password: string): Observable<any> {
    return from(signInWithEmailAndPassword(this.auth, email, password))
      .pipe(
        map(userCredentials => userCredentials.user)
      )
  }

  registerUser(email: string, password: string, firstName: string, lastName: string): Observable<User> {
    return from(createUserWithEmailAndPassword(this.auth, email, password))
      .pipe(
        switchMap(userCredentials => {
          const user = userCredentials.user;
          return from(updateProfile(user, {displayName: `${firstName} ${lastName}`}))
            .pipe(
              map(() => user)
            )
        })
      )
  }

  logout(): Observable<void> {
    return from(signOut(this.auth));
  }

  isAuthenticated() {
    return !!this.auth.currentUser;
  }

  getCurrentUser(): User | null {
    return this.auth.currentUser;
  }
}
