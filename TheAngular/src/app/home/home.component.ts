import { CountryService } from "./../country.service";
import { HomeService } from "./../home.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  events = [];
  constructor(
    private _homeService: HomeService,
    private _country: CountryService
  ) {}

  ngOnInit() {
    // this._homeService.getEvents().subscribe(
    //   res => {
    //     this.events = res;
    //   },
    //   err => {
    //     console.log(err);
    //   }
    // );
    this._country.getCountry().subscribe(res => {
      this.events = res;
      console.log(res);
    });
  }
}
