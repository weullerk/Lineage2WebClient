import { Injectable } from '@angular/core';
import {Router, CanActivate, ActivatedRoute, RouterState, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

@Injectable()
export class UpdatePasswordGuard implements CanActivate {

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) {}

  canActivate(): boolean {
    console.log(this.router.url);
    return true;
  }

}
