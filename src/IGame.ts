import Scene from './Scene'
import Physics from './Physics'
import Player from './Player'
import Sprite from './Sprite'

export default interface IGame {
  options?: Options
  physics?: Physics
  run(): void
  setCurrentScene(scene: Scene)
}

export interface Options {}
