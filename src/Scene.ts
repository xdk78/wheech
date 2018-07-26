import IScene from './IScene'
import Sprite from './Sprite'
import IPhysics from './IPhysics'

export default class Scene implements IScene {
  background: any
  sprites: Sprite[]
  physics: IPhysics

  constructor(background: any, physics: IPhysics, sprites: Sprite[]) {
    this.physics = physics
    this.background = background
    this.sprites = sprites
  }

  public draw(context: CanvasRenderingContext2D, canvasWidth: number, canvasHeight: number): void {
    context.clearRect(0, 0, canvasWidth, canvasHeight)
    this.sprites.filter(sprite => !sprite.isDestroyed).forEach(element => {
      element.render(context)
    })

    this.physics.update()
  }
}
