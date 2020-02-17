import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class HomeService {
  private _eventUrl = "http://localhost:3000/routes/home";

  constructor(private http: HttpClient) {}
  getEvents() {
    return this.http.get<any>(this._eventUrl);
  }
}
