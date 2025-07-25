import { Injectable } from '@angular/core';
import {BehaviorSubject, filter, from, map, Observable, switchMap, take} from 'rxjs';
import {
  Auth,
  createUserWithEmailAndPassword,
  User,
  updateProfile,
  signInWithEmailAndPassword,
  onAuthStateChanged, signOut
} from '@angular/fire/auth';
import {doc, Firestore, setDoc} from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSubject$ = new BehaviorSubject<User | null>(null);
  private authInitializedSubject = new BehaviorSubject<boolean>(false);

  public user$ = this.userSubject$.asObservable();
  public authInitialized$ = this.authInitializedSubject.asObservable();

  constructor(private auth: Auth, private firestore: Firestore) {
    onAuthStateChanged(this.auth, user => {
      this.userSubject$.next(user);

      if (!this.authInitializedSubject.value) {
        this.authInitializedSubject.next(true);
      }
    })
  }

  waitForAuth(): Observable<User | null> {
    return this.authInitialized$.pipe(
      filter(isInitialized => isInitialized),
      switchMap(() => this.user$),
      take(1)
    )
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
              switchMap(() => {
                const userDoc = doc(this.firestore, `users/${user.uid}`);
                return from(setDoc(userDoc, {
                  uid: user.uid,
                  email: user.email,
                  displayName: `${firstName} ${lastName}`,
                  createdAt: new Date().toISOString()
                }))
              }),
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
