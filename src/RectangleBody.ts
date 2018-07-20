import RectangleShape from './RectangleShape'
import Matter, { Body, Vector, IChamferableBodyDefinition } from 'matter-js'

export default class RectangleBody extends RectangleShape {
  private _options?: IChamferableBodyDefinition
  private _body: Body

  constructor(position: Vector, width: number, height: number, style?, options?: IChamferableBodyDefinition) {
    super(position, width, height, style)
    this._options = options
    this._body = Matter.Bodies.rectangle(this._position.x, this._position.y, this._width, this._height, this._options)
  }

  public getBody(): Body {
    return this._body
  }

  public draw(context: CanvasRenderingContext2D): void {
    this._position = this._body.position
    this._angle = this._body.angle
    super.draw(context)
  }
}
