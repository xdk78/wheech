import Scene from './Scene'
import Physics from './Physics'

export default interface IGame {
  options: Options
  physics?: Physics
  run(): void
  setCurrentScene(scene: Scene)
}

export interface Options {
  width: number
  height: number
}
