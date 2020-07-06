import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {LoginService} from './shared/login.service';
import {Role} from '../../../model/store-enum';

@Injectable({
  providedIn: 'root'
})
export class AppGuardService implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const role = this.loginService.userRole();
    if (role === Role.ARTISAN && next.routeConfig.path.includes('artisan-area')){
     return true;
   }
    else if (role === Role.ADMIN && next.routeConfig.path.startsWith('admin-area')){
      return true;
    }
    else if (role === Role.TRADER && next.routeConfig.path.includes('trader-area')){
      return true;
    } else {
     // this.router.navigateByUrl('/403');
     // return false;
      return true;
   }
  }

}
