import IShape from './IShape'
import Vector2d from './Vector2d'
export default class RectangleShape implements IShape {
  private _width: number
  private _style?: any
  private _height: number
  private _context: CanvasRenderingContext2D

  constructor(width: number, height: number, context: CanvasRenderingContext2D, style?) {
    this._width = width
    this._height = height
    this._style = style
    this._context = context
  }

  public draw(vector: Vector2d, rotation: number) {
    const ctx = this._context
    ctx.beginPath()
    // @ts-ignore
    ctx.rect(vector.getX(), vector.getY(), this._width, this._height)
    ctx.fillStyle = this._style.fillStyle
    ctx.fill()
    ctx.closePath()
  }
}
