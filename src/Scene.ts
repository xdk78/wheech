import IScene from './IScene'
import Sprite from './Sprite'

export default class Scene implements IScene {
  background: any
  sprites: Sprite[]

  constructor(background: any, sprites: Sprite[]) {
    this.background = background
    this.sprites = sprites
  }

  public draw(context: CanvasRenderingContext2D, canvasWidth: number, canvasHeight: number): void {
    this.sprites.forEach(element => {
      element.render(context, canvasWidth, canvasHeight)
    })
  }
}
