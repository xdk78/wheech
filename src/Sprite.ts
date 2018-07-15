import ISprite from './ISprite'
import IShape from './IShape'
import Vector2d from './Vector2d'

export default class Sprite implements ISprite {
  context: CanvasRenderingContext2D
  path?: any
  _shape: IShape
  _position: Vector2d

  constructor(context: CanvasRenderingContext2D, path?: any) {
    this.context = context
    this.path = path
  }

  public setPosition(pos: Vector2d) {
    this._position = pos
  }

  public setShape(shape: IShape) {
    this._shape = shape
  }

  render(): void {
    this._shape.draw(this._position, 0)
  }
}
