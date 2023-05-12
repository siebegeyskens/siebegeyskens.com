import ArrowCarousel from "./ArrowCarousel.js";
import DotCarousel from "./DotCarousel.js";

window.onload = () => {
  const timeLineCarousel = new ArrowCarousel("timeline-carousel-item");
  const skillsCarousel = new ArrowCarousel("skills-carousel-item");
  const influencersCarousel = new DotCarousel("1nfluencers-carousel-item");
};
