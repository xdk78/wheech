import IWheech from './IWheech'
import Game from './Game'
import { Options } from './IGame'

export default class Wheech implements IWheech {
  private _options?: Options

  createGame(options: Options): Game {
    this._options = options
    return new Game(this._options)
  }
}
