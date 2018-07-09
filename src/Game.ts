import IGame, { Options } from './IGame'
import Scene from './Scene'
import Sprite from './Sprite'
import Player from './Player'

export default class Game implements IGame {
  private _context: CanvasRenderingContext2D
  private _scenes: Scene[]
  options?: Options

  constructor(el: HTMLCanvasElement, options?: Options) {
    this._context = el.getContext('2d') as CanvasRenderingContext2D
    this._scenes = []
    this.options = options
  }

  public get context(): CanvasRenderingContext2D {
    return this._context
  }
  public set context(value: CanvasRenderingContext2D) {
    this._context = value
  }

  public addScene(player: Player, background: any, sprites: Sprite[]): Scene {
    const scene = new Scene(player, background, sprites)
    return scene
    // this._scenes.push(scene)
  }

  public get scenes(): Scene[] {
    return this._scenes
  }

  public set scenes(value: Scene[]) {
    this._scenes = value
  }

  public run(): void {
    console.log('Game is running')
  }
}
