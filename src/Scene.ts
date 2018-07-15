import IScene from './IScene'
import Sprite from './Sprite'
import Player from './Player'

export default class Scene implements IScene {
  player?: Player
  background: any
  sprites: Sprite[]

  constructor(player: Player, background: any, sprites: Sprite[]) {
    this.background = background
    this.sprites = sprites
  }

  public draw(canvasWidth: number, canvasHeight: number): void {
    this.sprites.forEach(element => {
      element.render(canvasWidth, canvasHeight)
    })
  }
}
