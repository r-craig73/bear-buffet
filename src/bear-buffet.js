import $ from 'jquery';

export class HungryBear {

  constructor(name) {
    this.name = name;
    this.foodLevel = 10;
  }

  setHunger() {
    setInterval(() => {
      this.foodLevel--;
    }, 1000);
  }

  didYouGetEaten() {
    if (this.foodLevel < 0) {
      return true;
    } else {
      return false;
    }
  }

  feed() {
    this.foodLevel = 10;
  }

  displayResults() {
    if (!this.didYouGetEaten()) {
      $("#food").text(this.foodLevel);
    } else if (this.didYouGetEaten() == true) {
      $("#dead").text(`${this.name} is dead!!!`);
    } else {
      $("#dead").text(`oh no`);   // undefined
    }
  }

  refreshPage() {
    setInterval(() => {
      this.displayResults();
    }, 1000)
  }

  // pauseGame() {
  //   setTimeout(() => {
  //     this.displayResults();
  //   }, 25000);
  // }

}
