import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {LoginService} from '../../../../storefront/src/app/shared/login.service';
import {Observable} from 'rxjs';
import {Role} from '../../../../model/store-enum';

@Injectable({
    providedIn: 'root'
})
export class AdminGuard implements CanActivate {

    constructor(private loginService: LoginService) {
    }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        const role = this.loginService.userRole();
        return role === Role.ARTISAN && next.routeConfig.path.startsWith('artisan');
    }
}
