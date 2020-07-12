import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  CanActivate,
} from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    console.log(localStorage["token"]);
    if (localStorage["token"] == undefined) {
      this.router.navigate([""]);
    } else if (localStorage["token"] != "null") {
      return true;
    } else {
      this.router.navigate([""]);
    }
  }
}
