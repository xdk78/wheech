import IGame, { Options } from './IGame'
import Scene from './Scene'
import Physics from './Physics'
import Sprite from './Sprite'
import Player from './Player'

export default class Game implements IGame {
  private _scenes: Scene[]
  private _sprites?: Sprite[]
  private _physics?: Physics
  options: Options

  constructor(options: Options, physics?: Physics) {
    this._scenes = []
    this.options = options
    this._physics = physics
  }

  public addScene(player: Player, background: any, sprites: Sprite[]): void {
    const scene = new Scene(player, background, sprites)
    this._scenes.push(scene)
  }

  public run(): void {
    console.log('Game is running')
  }
}
