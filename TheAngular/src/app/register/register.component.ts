import { AuthService } from "./../auth.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  registerUserData = {};
  constructor(private _auth: AuthService, private _router: Router) {}

  ngOnInit() {}
  registeruser(form: NgForm) {
    console.log(form.value);
    this.registerUserData = form.value;
    console.log(this.registerUserData);
    this._auth.registerUser(this.registerUserData).subscribe(
      res => {
        localStorage.setItem("token", res.token);
        console.log(res.token);
        this._router.navigate(["/login"]);
      },
      err => {
        console.log(err);
      }
    );
  }
}
