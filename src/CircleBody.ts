import Matter, { Body, Vector, IChamferableBodyDefinition } from 'matter-js'
import CircleShape from './CircleShape'
import IMatterBody from './IMatterBody'

export default class CircleBody extends CircleShape implements IMatterBody{
  private _options?: IChamferableBodyDefinition
  private _body: Body

  constructor(position: Vector, radius: number, startAngle: number, endAngle: number, anticlockwise?: boolean, style?, options?: IChamferableBodyDefinition) {
    super(position, radius, startAngle, endAngle, anticlockwise, style)
    this._options = options
    this._body = Matter.Bodies.circle(this._position.x, this._position.y, this._radius, this._options)
  }

  public getBody(): Body {
    return this._body
  }

  public draw(context: CanvasRenderingContext2D): void {
    this._position = this._body.position
    this._radius = this._body.angle
    super.draw(context)
  }
}
