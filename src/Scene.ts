import IScene from './IScene'
import Sprite from './Sprite'
import Player from './Player'

export default class Scene implements IScene {
  player: Player
  background: any
  sprites: Sprite[]

  constructor(player: Player, background: any, sprites: Sprite[]) {
    throw new Error('Method not implemented.')
  }
}
