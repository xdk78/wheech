import IGame, { Options } from './IGame'
import Scene from './Scene'
import Sprite from './Sprite'
import Player from './Player'

export default class Game implements IGame {
  private _context: CanvasRenderingContext2D
  private _currentScene: Scene
  options?: Options

  constructor(el: HTMLCanvasElement, options?: Options) {
    this._context = el.getContext('2d') as CanvasRenderingContext2D
    this.options = options
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

  public update(): void {
    if (this._currentScene) {
      this._currentScene.draw()
    }
    requestAnimationFrame(() => this.update())
  }

  public run(): void {
    console.log('Game is running')
    this.update()
  }
}
