import IWheech from './IWheech'
import Game from './Game'
import { Options } from './IGame'

export default class Wheech implements IWheech {
  private _options?: Options
  private _el: any

  public createGame(el: string, options?: Options): Game {
    this._el = document.getElementById(el)
    this._options = options
    const opts = this._options
    return new Game(this._el, opts)
  }
}
