import IShape from './IShape'
import Vector2d from './Vector2d'

export default class RectangleShape implements IShape {
  private _width: number
  private _style?: any
  private _height: number

  constructor(width: number, height: number, style?) {
    this._width = width
    this._height = height
    this._style = style
  }

  public draw(context: CanvasRenderingContext2D, canvasWidth: number, canvasHeight: number, vector: Vector2d, rotation: number): void {
    const ctx = context
    ctx.beginPath()
    // @ts-ignore
    ctx.rect(vector.x, vector.y, this._width, this._height)
    ctx.fillStyle = this._style.fillStyle
    ctx.fill()
    ctx.closePath()
  }
}
