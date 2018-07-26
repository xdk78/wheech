import Matter, { Body, Vector, IChamferableBodyDefinition } from 'matter-js'
import CircleShape, { Arc } from './CircleShape'
import IMatterBody from './IMatterBody'

export default class CircleBody extends CircleShape implements IMatterBody {
  private _options?: IChamferableBodyDefinition
  private _body: Body

  constructor(position: Vector, arc: Arc, degrees?: number, style?, options?: IChamferableBodyDefinition) {
    super(position, arc, degrees, style)
    this._options = options
    this._body = Matter.Bodies.circle(this._position.x, this._position.y, this._arc.radius, this._options)
  }

  public setPosition(position: Vector): void {
    this._body.position = position
    super.setPosition(this._body.position)
  }

  public getBody(): Body {
    return this._body
  }

  public draw(context: CanvasRenderingContext2D): void {
    this._position = this._body.position
    super.draw(context)
  }
}
