import ISprite from './ISprite'

export default class Sprite implements ISprite {
  context: CanvasRenderingContext2D
  width: number
  height: number
  style: any
  path?: any

  constructor(context: CanvasRenderingContext2D, width: number, height: number, style: any, path?: any) {
    this.context = context
    this.width = width
    this.height = height
    this.style = style
    this.path = path
  }

  public rect() {
    const ctx = this.context
    ctx.beginPath()
    ctx.rect(0, 0, this.width, this.height)
    ctx.fillStyle = this.style.fillStyle
    ctx.fill()
    ctx.closePath()
  }
}
