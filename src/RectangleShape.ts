import IShape from './IShape'
import { Vector } from 'matter-js'

export default class RectangleShape implements IShape {
  protected _position: Vector
  protected _width: number
  protected _height: number
  protected _angle: number
  protected _style?: any
  protected _image?: any

  constructor(position: Vector, width: number, height: number, style?, image?) {
    this._position = position
    this._width = width
    this._height = height
    this._style = style
    this._image = image
  }

  public setPosition(position: Vector): void {
    this._position = position
  }

  public draw(context: CanvasRenderingContext2D): void {
    const ctx = context
    ctx.beginPath()
    ctx.rect(this._position.x, this._position.y, this._width, this._height)
    ctx.fillStyle = this._style.fillStyle
    ctx.drawImage(this._image, this._width, this._height)
    ctx.fill()
    ctx.closePath()
  }
}
