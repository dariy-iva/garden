import Garden from './Garden.js'
import getRandomBetweenNumbers from '../utils/getRandomBetweenNumbers.js'

const appleColors = ['green', 'yellow', 'red']

export default class GardenApple extends Garden {
  constructor() {
    super()
    this.color = appleColors[getRandomBetweenNumbers(0, 2)]
    this.size = getRandomBetweenNumbers(1, 10)
    this.fallen = this.age === 30 ? 1 : 0
    this.spoiled = 0
  }

  _fall() {
    this.fallen = 1
  }

  _spoil() {
    this.spoiled = 1
  }

  passDay() {
    super.passDay()

    if (this.age === 30) {
      this._fall()
    } else if (this.fallen) {
      this._spoil()
    }
  }
}
