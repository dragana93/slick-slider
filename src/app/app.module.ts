import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { SlickCarouselModule } from "ngx-slick-carousel";

// import { OwlModule } from 'ngx-owl-carousel';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, SlickCarouselModule],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
