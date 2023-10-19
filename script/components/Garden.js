import getRandomBetweenNumbers from '../utils/getRandomBetweenNumbers.js'

export default class Garden {
  constructor() {
    this.age = getRandomBetweenNumbers(0, 30)
  }

  _old() {
    this.age += 1
  }

  passDay() {
    this._old()
  }
}
