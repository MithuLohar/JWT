import { AuthService } from './../auth.service';
import { Component, OnInit } from "@angular/core";


import { MatSnackBar } from "@angular/material";
import { PizzaPartyComponent } from "../snakbar/snakbar.component";

import { Router } from '@angular/router';
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})

export class LoginComponent implements OnInit {
  loginUserData = { email: "", password: "" };
  constructor(private _auth: AuthService, private _router: Router,private _snakbar: MatSnackBar) {}

  ngOnInit() {}
  loginUser() {
    console.log(this.loginUserData);
    this._auth.loginUser(this.loginUserData).subscribe(
      res => {
        console.log(res);
        localStorage.setItem("token", res.token);
        console.log(res.token);

        this._router.navigate(["/event"]);
        this._snakbar.openFromComponent(PizzaPartyComponent, {
          duration: 2000
        });
      },
      err => {
        console.log(err);
        this._snakbar.open("login failed", "OK");
      }
    );
  }
}