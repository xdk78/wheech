import IShape from './IShape'
import { Vector } from 'matter-js'

export default class RectangleShape implements IShape {
  protected _position: Vector
  protected _width: number
  protected _height: number
  protected _angle: number
  protected _style?: any

  constructor(position: Vector, width: number, height: number, style?) {
    this._position = position
    this._width = width
    this._height = height
    this._style = style
  }

  public setPosition(position: Vector): void {
    this._position = position
  }

  public draw(context: CanvasRenderingContext2D): void {
    const ctx = context
    ctx.beginPath()
    ctx.rect(this._position.x, this._position.y, this._width, this._height)
    ctx.fillStyle = this._style.fillStyle
    ctx.fill()
    ctx.closePath()
  }
}
