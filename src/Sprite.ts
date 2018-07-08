import ISprite from './ISprite'

export default class Sprite implements ISprite {
  width: number
  height: number
  path?: any

  constructor(width: number, height: number, path?: any) {
    this.width = width
    this.height = height
    this.path = path
  }
}
