import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';

import { AuthService } from './auth.service';

import { AppGlobal } from './../app.global';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService,
              private router: Router,
              private appGlobal: AppGlobal) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['/login'])
    } else if (this.authService.getUserType() != this.appGlobal.getMD5(route.root.firstChild.routeConfig.path)) {
      switch(this.authService.getUserType()) {
        case this.appGlobal.getMD5('admin'):
          this.router.navigate(['/admin']);
        break;
        case this.appGlobal.getMD5('company'):
          this.router.navigate(['/company']);
        break;
        case this.appGlobal.getMD5('brand'):
          this.router.navigate(['/brand']);
        break;
        default:
          this.authService.logout();
        break;
      }
    }
    return this.authService.isAuthenticated();
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['/login'])
    }
    return this.authService.isAuthenticated();
  }
}
