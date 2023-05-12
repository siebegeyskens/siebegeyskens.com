export default class ArrowCarousel {
  constructor(itemsClassName) {
    this.items = Array.from(document.getElementsByClassName(itemsClassName));
    this.position = 0;
    this.direction = null;

    this.init();
  }

  showPrevItem() {
    // hide previous item (card)
    this.items.at(this.position + 1).classList.toggle("card--hidden");
    // show next item (card)
    this.items.at(this.position).classList.toggle("card--hidden");
  }

  showNextItem() {
    // hide previous item (card)
    this.items.at(this.position - 1).classList.toggle("card--hidden");
    // show next item (card)
    this.items.at(this.position).classList.toggle("card--hidden");
  }

  // change internal position down
  toPrevPosition() {
    if (this.position === 0) {
      // do nothing if carousel is already at the first item
      return;
    } else {
      this.position--;
      this.showPrevItem();
    }
  }

  // change internal position up
  toNextPosition() {
    if (this.position === this.items.length - 1) {
      // do nothing if carousel is already at the last item
      return;
    } else {
      this.position++;
      this.showNextItem();
    }
  }

  // Check to see if the carousel needs to go forward or backwards
  // (find out if clicked in the left half or the right half of the card)
  setDirection(e) {
    // use event.currentTarget which points to the element that you attached the listener and not it's children as it does when you click on the children
    // https://stackoverflow.com/questions/50149925/click-event-target-gives-element-or-its-child-not-parent-element

    // Get the bounding rectangle of target
    const itemRect = e.currentTarget.getBoundingClientRect();

    // Mouse position relative to the currentTarget (carousel card that is clicked)
    const x = e.clientX - itemRect.left;


    if (x <= itemRect.width / 2) {
      this.direction = "prev";
    } else {
      this.direction = "next";
    }
  }

  init() {
    // add event listeners
    this.items.forEach((item) =>
      item.addEventListener("click", (e) => {
        this.setDirection(e);
        console.log(this.direction)
      })
    );
  }
}
