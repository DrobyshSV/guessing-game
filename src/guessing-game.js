class GuessingGame {
  constructor() {}

  setRange(min, max) {
    this.L = min;
    this.M = max;
  }

  guess() {
    return Math.round((this.L + this.M) / 2);
  }

  lower() {
    this.M = this.guess();
  }

  greater() {
    this.L = this.guess();
  }

}

module.exports = GuessingGame;
