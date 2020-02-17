import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class CountryService {
  countryurl =
    "https://unpkg.com/country-flag-emoji-json@1.0.2/json/flag-emojis.pretty.json";
  constructor(private http: HttpClient) {}
  getCountry() {
    return this.http.get<any>(this.countryurl);
  }
}
