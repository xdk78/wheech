import ISprite from './ISprite'

export default class Sprite implements ISprite {
  context: CanvasRenderingContext2D
  path?: any

  constructor(context: CanvasRenderingContext2D, path?: any) {
    this.context = context
    this.path = path
  }

  public rect(x: number, y: number, width: number, height: number, style: any) {
    const ctx = this.context
    ctx.beginPath()
    ctx.rect(x, y, width, height)
    ctx.fillStyle = style.fillStyle
    ctx.fill()
    ctx.closePath()
  }
}
