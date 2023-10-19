import GardenWithChildren from './GardenWithChildren.js'

export default class GardenTree extends GardenWithChildren {
  passDay() {
    super.passDay()

    if (this.age && !(this.age % 30)) {
      this._addChild()
    }
  }
}
