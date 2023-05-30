// Simple carousel (infinite and no direction)

// 1. MOVING THE CAROUSEL
// 1.1 based on a classname add event listeners on all the class elements
// 1.2 set internal position
// 1.3 show items based on position
// 2. HANDLING THE HEIGHTS:
// 2.1 set the height all all the items based on the first items height on initialize
// 2.2 same when user resizes

export default class DotCarousel {
  constructor(itemsClassName) {
    this.items = Array.from(document.getElementsByClassName(itemsClassName));
    this.position = 0;
    // this.lastScreenWidth;
    this.init();

    //
    this.name = itemsClassName;
  }

  // Moving the carousel
  // -------------------

  setPosition() {
    if (this.position === this.items.length - 1) {
      this.position = 0;
    } else {
      this.position++;
    }
  }

  showItems() {
    // hide previous item (card)
    this.items.at(this.position - 1).classList.toggle("card--hidden");
    // show next item (card)
    this.items.at(this.position).classList.toggle("card--hidden");
  }

  move(e) {
    this.setPosition();
    this.showItems();
  }

  // Handling the heights of the carousel items:
  // set the height all all the items based on the first items height
  // ------------------------------------------

  // set the items hight to auto
  resetItemsHeight = () => {
    this.items.forEach((card, i) => {
      if (i !== 0) {
        card.setAttribute(`style`, `height:auto`);
      }
    });
  };

  // set height of the 2nd and or 3rd cards to the height of the first card in the carousel
  // makes the carousel layout not jump when smaller then tablet size
  setItemsHeight = () => {
    // get height of the first item
    let itemHeight;
    // in case the first card is hidden then it doesn't have a height
    // to fix this show it, get the hide, hide it.
    if (this.items[0].classList.contains("card--hidden")) {
      this.items[0].classList.toggle("card--hidden");
      itemHeight = this.items[0].clientHeight;
      this.items[0].classList.toggle("card--hidden");
    } else {
      itemHeight = this.items[0].clientHeight;
    }

    // set other card height first card height
    // but not of the first one, so that whenever the user resizes the screen we can resize the other cards again
    this.items.forEach((card, i) => {
      if (i !== 0) {
        card.setAttribute(`style`, `height:${itemHeight}px`);
      }
    });
  };

  init() {
    this.items.forEach((item) =>
      item.addEventListener("click", (e) => {
        this.move(e);
      })
    );

    if (window.innerWidth < 768) {
      this.setItemsHeight();
    }

    /*
    onresize = (event) => {
      console.log("resize!");
      if (window.innerWidth < 768) {
        this.setItemsHeight();
      }

      // if came from 767 then set the items height to that of the grid
      // So that means if jumping from mobile to tablet set the project items height to auto
      // So that the grid settings will define the hight of the items
      if (this.lastScreenWidth <= 767 && window.innerWidth >= 768) {
        this.resetItemsHeight();
      }

      this.lastScreenWidth = window.innerWidth;
    };
    */
  }
}
