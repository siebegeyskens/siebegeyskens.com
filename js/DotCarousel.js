// Simple carousel (infinite and no direction)
// 1. based on a classname add event listeners on all the class elements
// 2. set internal position
// 3. show items based on position


export default class DotCarousel {
  constructor(itemsClassName) {
    this.items = Array.from(document.getElementsByClassName(itemsClassName));
    this.position = 0;
    this.init();
  }

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

  init() {
    this.items.forEach((item) =>
      item.addEventListener("click", (e) => {
        this.move(e);
        console.log(this.position);
      })
    );
  }
}
