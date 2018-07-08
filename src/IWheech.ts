import Game from './Game'
import { Options } from './IGame'

export default interface IWheech {
  createGame(el: HTMLCanvasElement, options: Options): Game
}
