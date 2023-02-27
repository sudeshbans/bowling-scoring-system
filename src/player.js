// constants
const MAX_VALUE = 10;
const LAST_FRAME = 10;
const STRIKE = "X";
const SPARE = "/";

class Player {
  #scores = []

  #isLastIndex(idx) {
    const lastIndex = this.#scores.length - 1;
    return lastIndex === idx;
  }

  #checkEmpty() {
    if (this.#scores.length === 1 && this.#scores[0].score === STRIKE) {
      return "Empty";
    }

    if (
      this.#scores.length === 2 &&
      this.#scores[0].score === STRIKE &&
      this.#scores[1].score === STRIKE
    ) {
      return "Empty";
    }

    if (this.#scores.length === 2 && this.#scores[1].score === SPARE) {
      return "Empty";
    }
  }

  // converts all string to the actual value 
  #parseValueToInt(value, currentIndex) {
    if (value === STRIKE) {
      return MAX_VALUE;
    }

    if (value === SPARE) {
      return MAX_VALUE - this.#scores[currentIndex - 1].score;
    }
    return parseInt(value);
  }

  #getCurrentStrikeValue(idx) {
    // tenth frame needs to be handled diffrerently 
    if (this.#scores[idx].frame === LAST_FRAME) {
      return MAX_VALUE;
    }

    if (this.#scores[idx + 1] && this.#scores[idx + 2]) {
      const val1 = this.#parseValueToInt(this.#scores[idx + 1].score, idx + 1);
      const val2 = this.#parseValueToInt(this.#scores[idx + 2].score, idx + 2);
      const currentStrike = MAX_VALUE;

      return val1 + val2 + currentStrike;
    } else {
      return 0;
    }
  }

  #getCurrentSpareValue(idx) {
    // tenth frame needs to be handled diffrerently 
    if (this.#scores[idx].frame === LAST_FRAME) {
      return MAX_VALUE - this.#scores[idx - 1].score;
    }

    if (this.#scores[idx + 1]) {
      const val = this.#parseValueToInt(this.#scores[idx + 1].score, idx);
      const currentSpareValue = MAX_VALUE - this.#scores[idx - 1].score;
      return currentSpareValue + val;
    } else {
      return 0;
    }
  }

  // adds the roll score and tracks the frame number
  // for that score 
  addScore(score, frame) {
    this.#scores.push({ score, frame });
  }

  // calculates the score up until the last roll
  get score() {
    let total = 0;

    const empty = this.#checkEmpty();

    if (empty) {
      return empty;
    }

    for (let i = 0; i < this.#scores.length; i++) {
      const val = this.#scores[i].score;
      const idx = i;

      if (val === STRIKE) {
        // gets the value of the strike and add its to total
        total += this.#getCurrentStrikeValue(idx);
      } else if (val === SPARE) {

        // gets the value of the spare and add its to total
        total += this.#getCurrentSpareValue(idx);

        // it handles the case for [[1,2] [7,/]]
        // so we are not calulating the value of 7
        if (this.#isLastIndex(idx) && this.#scores[i].frame !== LAST_FRAME) {
          total = total - this.#scores[idx - 1].score;
        }
      } else {
        total += this.#parseValueToInt(val, idx);
      }
    }

    return total;
  }
}

module.exports = Player;
