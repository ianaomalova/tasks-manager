import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import {AuthService} from './auth.service';
import {map, Observable, take} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(): Observable<boolean> {
    return this.authService.waitForAuth().pipe(
      take(1),
      map(user => {
        console.log(user);
        if (user) return true;
        else {
          this.router.navigate(['/auth']);
          return false;
        }
      })
    )
  }
}
