import Game from './Game'
import { Options } from './IGame'

export default interface IWheech {
  createGame(el: string, options?: Options): Game
}
