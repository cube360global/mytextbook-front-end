import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {CookieManagerService} from '../services/cookie-manager.service';
import {AlertService} from '../../../../../lib/tools/src/lib/alert.service';

@Injectable({
  providedIn: 'root'
})
export class UserAuthGuard implements CanActivate {
  constructor(private cookieService: CookieManagerService,
              private alertService: AlertService,
              private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.cookieService.checkAccessToken()) {
      return true;
    }
    this.alertService.showError('Please Login First');
    this.router.navigate(['']);
    return false;

  }

}
