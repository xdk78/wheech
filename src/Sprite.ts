import ISprite from './ISprite'
import IShape from './IShape'
import Vector2d from './Vector2d'

export default class Sprite implements ISprite {
  private _path?: any
  private _shape: IShape
  private _position: Vector2d

  constructor(path?: any) {
    this._path = path
  }

  public setPosition(pos: Vector2d) {
    this._position = pos
  }

  public setShape(shape: IShape) {
    this._shape = shape
  }

  public render(): void {
    this._shape.draw(this._position, 0)
  }
}
