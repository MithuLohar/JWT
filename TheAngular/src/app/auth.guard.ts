import { AuthService } from "./auth.service";
import { Router, CanActivate } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private _authservice: AuthService, private _router: Router) {}

  canActivate(): boolean {
    if (this._authservice.loggedIn()) {
      console.log("true");
      return true;
    } else {
      console.log("false");
      this._router.navigate(["/login"]);
      return false;
    }
  }
}
