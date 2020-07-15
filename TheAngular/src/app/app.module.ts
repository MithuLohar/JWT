import { AuthGuard } from "./auth.guard";
import {
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatSliderModule,
  MatSnackBarModule,
  MatIconModule,
  MatCardModule
} from "@angular/material";
import { PizzaPartyComponent } from "./snakbar/snakbar.component";
import { HomeService } from "./home.service";
import { AuthService } from "./auth.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { TokenInterceptorService } from "./token-interceptor.service";
import { CountryService } from "./country.service";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { PopupComponent } from "./popup/popup.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    PopupComponent,
    PizzaPartyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatIconModule,
    MatCardModule
  ],
  providers: [
    HomeService,
    AuthService,
    AuthGuard,

    CountryService,

    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [PopupComponent, PizzaPartyComponent]
})
export class AppModule {}
