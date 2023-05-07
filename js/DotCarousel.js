export default class DotCarousel {
  constructor(itemsClassName) {
    this.items = Array.from(document.getElementsByClassName(itemsClassName));
    this.position = 0;

    this.init();
  }

  togglePosition() {
    if (this.position === this.items.length - 1) {
      this.position = 0;
    } else {
      this.position++;
    }
  }

  toggleItems() {
    // hide previous item (card)
    this.items.at(this.position - 1).classList.toggle("card--hidden");
    // show next item (card)
    this.items.at(this.position).classList.toggle("card--hidden");
  }

  toggle(e) {
    this.togglePosition();
    this.toggleItems();
  }

  init() {
    this.items.forEach((item) =>
      item.addEventListener("click", (e) => {
        this.toggle(e);
      })
    );
  }
}
