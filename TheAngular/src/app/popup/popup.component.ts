import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Component, OnInit, Inject } from "@angular/core";

@Component({
  selector: "app-popup",
  templateUrl: "./popup.component.html",
  styleUrls: ["./popup.component.css"]
})
export class PopupComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(data.val);
  }

  ngOnInit() {}
}
