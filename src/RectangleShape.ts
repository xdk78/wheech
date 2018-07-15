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

  public draw(canvasWidth: number, canvasHeight: number, vector: Vector2d, rotation: number): void {
    const ctx = this._context
    ctx.clearRect(0, 0, canvasWidth, canvasHeight)
    ctx.beginPath()
    // @ts-ignore
    ctx.rect(vector.x, vector.y, this._width, this._height)
    ctx.fillStyle = this._style.fillStyle
    ctx.fill()
    ctx.closePath()
  }
}
