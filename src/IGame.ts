import Scene from './Scene'
import Physics from './Physics'
import Player from './Player'
import Sprite from './Sprite'

export default interface IGame {
  options: Options
  scenes?: Scene[]
  physics?: Physics
  sprites?: Sprite[]
  run(): void
  addScene(player: Player, background: any, sprites: Sprite[]): void
}

export interface Options {
  width: number
  height: number
}
