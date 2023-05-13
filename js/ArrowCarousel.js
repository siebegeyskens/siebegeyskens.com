// Simple carousel (with a direction and not finite):
// 1. based on a classname add event listeners on all the class elements
// 2. find out in which direction the carousel needs to go (clicked in left or right half of the element)
// 3. set internal position based on direction (carousel is not infinite)
// 4. based on internal position hide and show carousel elements


export default class ArrowCarousel {
  constructor(itemsClassName) {
    this.items = Array.from(document.getElementsByClassName(itemsClassName));
    this.direction = null;
    this.position = 0;
    this.stopPostition = false;
    this.length = this.items.length - 1;
    this.init();
  }
  
  // Show items based on position
  showItems() {

    // 1. HIDE THE PREVIOUS ITEM
    if (this.direction === "prev"){
      // hide previous item (card right of the one to show)
      this.items.at(this.position + 1).classList.toggle("card--hidden");
    } else if (this.direction === "next"){  
      // hide previous item (card left of the one to show)
      this.items.at(this.position - 1).classList.toggle("card--hidden");
    }

    // 2. SHOW THE CURRENT ITEM
    this.items.at(this.position).classList.toggle("card--hidden");
  }

  // Set internal position, based on direction
  setPosition() {

    // dont set position if at start or end of carousel
    // and set a stop
    if (this.position === 0 && this.direction === "prev" ) {
      this.stopPostition = true;
      return;
    }
    if (this.position === this.length && this.direction === "next") {
      this.stopPostition = true;
      return;
    }

    // reset stop
    if (this.stopPosition = true) this.stopPostition = false;

    // SET TO PREV POSITION
    if (this.direction === "prev") {
        this.position--;

    // SET TO NEXT POSITION 
    } else if (this.direction === "next") {
        this.position++;
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

    // Set the direction in the state
    // This will be used by further functions
    if (x <= itemRect.width / 2) {
      this.direction = "prev";
    } else {
      this.direction = "next";
    }
  }

  move(e) {
    this.setDirection(e);
    this.setPosition();
    if (!this.stopPostition) this.showItems();
  }

  init() {
    // add event listeners
    this.items.forEach((item) =>
      item.addEventListener("click", (e) => {
        this.move(e);
      })
    );
  }
}
