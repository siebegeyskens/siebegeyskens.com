import ArrowCarousel from "./ArrowCarousel.js";
import DotCarousel from "./DotCarousel.js";

window.onload = () => {
  // initialize carousels
  // ---------------------------------------------------------------

  let lastWidth;

  const timeLineCarousel = new ArrowCarousel("timeline-carousel-item");
  const skillsCarousel = new ArrowCarousel("skills-carousel-item");
  const wfnCarousel = new DotCarousel("wfn-carousel-item");
  const infCarousel = new DotCarousel("inf-carousel-item");
  const seshCarousel = new DotCarousel("sesh-carousel-item");
  const aLiveCarousel = new DotCarousel("a-live-carousel-item");

  // user resizes:
  onresize = (event) => {
    // set all the heights

    if (window.innerWidth < 768) {
      wfnCarousel.setItemsHeight();
      infCarousel.setItemsHeight();
      seshCarousel.setItemsHeight();
      aLiveCarousel.setItemsHeight();
    }

    // if came from 767 then set the items height to that of the grid
    // So that means if jumping from mobile to tablet set the project items height to auto
    // So that the grid settings will define the hight of the items
    if (lastWidth <= 767 && window.innerWidth >= 768) {
      wfnCarousel.resetItemsHeight();
      infCarousel.resetItemsHeight();
      seshCarousel.resetItemsHeight();
      aLiveCarousel.resetItemsHeight();
    }

    lastWidth = window.innerWidth;
  };

  // ---------------------------------------------------------------
};
