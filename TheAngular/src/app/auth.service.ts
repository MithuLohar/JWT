import { Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  static loginUser(loginUserData: { email: string; password: string; }) {
    throw new Error("Method not implemented.");
  }
  private _registerUrl = "http://localhost:3000/routes/register";
  private _loginUrl = "http://localhost:3000/routes/login";
  constructor(private http: HttpClient, private _router: Router) {}
  registerUser(user) {
    return this.http.post<any>(this._registerUrl, user);
  }
  loginUser(user) {
    return this.http.post<any>(this._loginUrl, user);
  }
  logoutUser() {
    localStorage.removeItem("token");
    this._router.navigate(["/login"]);
  }
  getToken() {
    return localStorage.getItem("token");
  }
  loggedIn() {
    return !!localStorage.getItem("token");
  }
}
