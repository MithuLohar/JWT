import { MatDialog, MatDialogRef } from "@angular/material";
import { CountryService } from "./../country.service";
import { HomeService } from "./../home.service";
import { Component, OnInit } from "@angular/core";
import { PopupComponent } from "../popup/popup.component";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  events = [];
  popup: MatDialogRef<PopupComponent>;
  constructor(
    private _homeService: HomeService,

    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this._homeService.getEvents().subscribe(
      res => {
        this.events = res;
        console.log(this.events);
      },
      err => {
        console.log(err);
      }
    );
  }

  openDialog(i) {
    console.log("this is home" + this.events[i]);
    this.popup = this.dialog.open(PopupComponent, { data: this.events[i] });
  }
}
