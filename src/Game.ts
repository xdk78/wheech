import IGame, { Options } from './IGame'
import Scene from './Scene'
import Sprite from './Sprite'
import Player from './Player'

export default class Game implements IGame {
  private _context: CanvasRenderingContext2D
  private _currentScene: Scene
  options: Options

  constructor(el: HTMLCanvasElement, options: Options) {
    this.options = options
    el.width = this.options.width
    el.height = this.options.height
    this._context = el.getContext('2d') as CanvasRenderingContext2D
  }

  public get context(): CanvasRenderingContext2D {
    return this._context
  }
  public set context(value: CanvasRenderingContext2D) {
    this._context = value
  }

  public setCurrentScene(scene: Scene) {
    this._currentScene = scene
  }

  public get getCurrentScene(): Scene {
    return this._currentScene
  }

  private update(): void {
    if (this._currentScene) {
      this._currentScene.draw(this.options.width, this.options.height)
    }
    requestAnimationFrame(() => this.update())
  }

  public run(): void {
    this.update()
    console.log('Game is running')
  }
}
