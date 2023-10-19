import Garden from './Garden.js'
import getRandomBetweenNumbers from '../utils/getRandomBetweenNumbers.js'

export default class GardenWithChildren extends Garden {
  constructor(createChild) {
    super()
    this.children = []
    this._createChild = createChild
  }

  _addChild() {
    const newChild = this._createChild()
    this.children.push(newChild)
  }

  createChildren() {
    const quantity = getRandomBetweenNumbers(0, 100)

    for (let i = 0; i < quantity; i++) {
      this._addChild()
    }
  }
}
