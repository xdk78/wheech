import IShape from './IShape'
import { Vector } from 'matter-js'

export type Arc = { radius: number; startAngle?: number; endAngle: number; anticlockwise?: boolean }

export default class CircleShape implements IShape {
  protected _position: Vector
  protected _arc: Arc
  protected _degrees: number
  protected _style?: any

  constructor(position: Vector, arc: Arc, degrees?: number, style?) {
    this._position = position
    this._arc = arc
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
    ctx.arc(
      this._position.x,
      this._position.y,
      0 | this._arc.radius,
      0 | this._arc.startAngle,
      (2 * Math.PI) | this._arc.endAngle,
      this._arc.anticlockwise
    )
    ctx.rotate((this._degrees * Math.PI) / 180)
    ctx.fillStyle = this._style.fillStyle
    ctx.fill()
    ctx.closePath()
  }
}
