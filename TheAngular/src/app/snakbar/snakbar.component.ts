import { Component } from "@angular/core";

@Component({
  selector: "snack-bar-component-example-snack",
  template: `
    <span class="example-pizza-party">
      login succesful 😃
    </span>
  `,
  styles: [
    `
      .example-pizza-party {
        color: hotpink;
        text-align: center;
      }
    `
  ]
})
export class PizzaPartyComponent {}
