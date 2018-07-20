import IShape from './IShape'
import { Vector } from 'matter-js'

export default class CircleShape implements IShape {
  protected _position: Vector
  protected _radius: number
  protected _startAngle: number
  protected _endAngle: number
  protected _anticlockwise?: boolean
  protected _degrees?: number
  protected _style?: any

  constructor(position: Vector, radius: number, startAngle: number, endAngle: number, anticlockwise?: boolean, degrees?: number, style?) {
    this._position = position
    this._radius = radius
    this._startAngle = startAngle
    this._endAngle = endAngle
    this._anticlockwise = anticlockwise
    this._degrees = degrees
    this._style = style
  }

  public setPosition(position: Vector): void {
    this._position = position
  }

  public setRotation(degrees: number): void {
    this._degrees = degrees
  }

  public draw(context: CanvasRenderingContext2D): void {
    const ctx = context
    ctx.beginPath()
    ctx.arc(this._position.x, this._position.y, this._radius, this._startAngle, this._endAngle, this._anticlockwise)
    ctx.rotate((this._degrees * Math.PI) / 180)
    ctx.fillStyle = this._style.fillStyle
    ctx.fill()
    ctx.closePath()
  }
}
