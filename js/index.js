import ArrowCarousel from "./ArrowCarousel.js";
import DotCarousel from "./DotCarousel.js";

window.onload = () => {

  // initialize carousels
  // ---------------------------------------------------------------
  
  const timeLineCarousel = new ArrowCarousel("timeline-carousel-item");
  const skillsCarousel = new ArrowCarousel("skills-carousel-item");
  const wfnCarousel = new DotCarousel("wfn-carousel-item");
  const infCarousel = new DotCarousel("inf-carousel-item");
  const seshCarousel = new DotCarousel("sesh-carousel-item");
  const aLiveCarousel = new DotCarousel("a-live-carousel-item");
  
  // user resizes: 
  onresize = (event) => {
    wfnCarousel.setItemsHeight();
    infCarousel.setItemsHeight();
    seshCarousel.setItemsHeight();
    aLiveCarousel.setItemsHeight();
  };

  // ---------------------------------------------------------------
};
