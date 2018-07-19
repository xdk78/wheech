import ISprite from './ISprite'
import IShape from './IShape'
import Vector2d from './Vector2d'
import { Body } from 'matter-js'

export default class Sprite implements ISprite {
  private _path?: any
  private _body: Body
  private _shape: IShape
  private _position: Vector2d

  constructor(path?: any) {
    this._path = path
  }

  public setPosition(pos: Vector2d) {
    this._position = pos
  }

  public setBody(body: Body) {
    this._body = body
  }

  public setShape(shape: IShape) {
    this._shape = shape
  }

  public render(context: CanvasRenderingContext2D, canvasWidth: number, canvasHeight: number): void {
    if (this._body) {
      this._position.x = this._body.position.x
      this._position.y = this._body.position.y
    }
    // TODO REPLACE VECTOR2D WITH MATTER.VECTOR
    this._shape.draw(context, canvasWidth, canvasHeight, this._position, 0)
  }
}
