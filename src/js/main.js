import Slider from "./modules/slider/slider";
import MainSlider from "./modules/slider/slider-main";
import MiniSlider from "./modules/slider/slider-mini";
import VideoPlayer from "./modules/videoPlayer";
import Difference from "./modules/difference";
import Forms from "./modules/forms";

window.addEventListener("DOMContentLoaded", () => {
  const mainPageslider = new MainSlider({
    pageSelector: ".page",
    btnsSelectors: ".next",
  });
  mainPageslider.render();

  const modulePageSlider = new MainSlider({
    pageSelector: ".moduleapp",
    btnsSelectors: ".next",
  });
  modulePageSlider.render();

  const mainPageShowUpSlider = new MiniSlider({
    pageSelector: ".showup__content-slider",
    next: ".showup__next",
    prev: ".showup__prev",
    activeClass: "card-active",
    animate: true,
  });
  mainPageShowUpSlider.init();

  const mainPageModulesSlider = new MiniSlider({
    pageSelector: ".modules__content-slider",
    next: ".modules__info-btns .slick-next",
    prev: ".modules__info-btns .slick-prev",
    activeClass: "card-active",
    animate: true,
  });
  mainPageModulesSlider.init();

  const mainPageFeedSlider = new MiniSlider({
    pageSelector: ".feed__slider",
    next: ".feed__slider .slick-next",
    prev: ".feed__slider .slick-prev",
    activeClass: "feed__item-active",
    autoplay: true,
  });
  mainPageFeedSlider.init();

  const videoPlayer = new VideoPlayer(".showup .play", ".overlay");
  videoPlayer.init();

  const oldOfficer = new Difference(".officerold", ".officer__card-item");
  oldOfficer.init();
  const newOfficer = new Difference(".officernew", ".officer__card-item");
  newOfficer.init();

  const forms = new Forms("form");
  forms.init();
});
