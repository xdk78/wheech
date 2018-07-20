import IShape from './IShape'
import { Vector } from 'matter-js'

export default class CircleShape implements IShape {
  protected _position: Vector
  protected _radius: number
  protected _startAngle: number
  protected _endAngle: number
  protected _anticlockwise?: boolean
  protected _style?: any

  constructor(position: Vector, radius: number, startAngle: number, endAngle: number, anticlockwise?: boolean, style?) {
    this._position = position
    this._radius = radius
    this._startAngle = startAngle
    this._endAngle = endAngle
    this._anticlockwise = anticlockwise
    this._style = style
  }

  public setPosition(position: Vector): void {
    this._position = position
  }

  public draw(context: CanvasRenderingContext2D): void {
    const ctx = context
    ctx.beginPath()
    ctx.arc(this._position.x, this._position.y, this._radius, this._startAngle, this._endAngle, this._anticlockwise)
    ctx.fillStyle = this._style.fillStyle
    ctx.fill()
    ctx.closePath()
  }
}
