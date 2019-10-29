import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "slick-slider";

  slides = [
    { img: "../assets/miki/miki1.jpg" },
    { img: "../assets/miki/miki2.jpg" },
    { img: "../assets/miki/miki3.jpg" },
    { img: "../assets/miki/miki4.jpg" },
    { img: "../assets/miki/miki5.jpg" },
    { img: "../assets/miki/miki6.jpg" },
    { img: "../assets/miki/miki7.jpg" },
    { img: "../assets/miki/miki8.jpg" },
    { img: "../assets/miki/miki9.jpg" },
    { img: "../assets/miki/miki10.jpg" }
  ];

  slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: "<div class='nav-btn next-slide'></div>",
    prevArrow: "<div class='nav-btn prev-slide'></div>",
    dots: true,
    infinite: false
  };

  addSlide() {
    this.slides.push({ img: "../assets/miki/miki11.jpg" });
  }

  removeSlide() {
    console.log("remove");
    this.slides.length = this.slides.length - 1;
  }

  slickInit(e) {
    console.log("slick initialized");
  }

  breakpoint(e) {
    console.log("breakpoint");
  }

  afterChange(e) {
    console.log("afterChange");
  }

  beforeChange(e) {
    console.log("beforeChange");
  }
}
