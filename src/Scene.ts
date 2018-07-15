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
    this.sprites.forEach(s => {
      console.log(s)
    })
  }
  // private _init(): void {

  // }

  draw() {
    this.sprites.forEach(element => {
      element.render()
    })
  }
}
