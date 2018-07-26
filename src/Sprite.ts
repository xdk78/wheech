import ISprite from './ISprite'
import IShape from './IShape'
import { Subject } from 'rxjs'
import { World } from 'matter-js'

export default class Sprite implements ISprite {
  isDestroyed = false
  private _shape: IShape
  onCollisionStart = new Subject<Sprite>()
  onCollisionEnd = new Subject<Sprite>()

  public setShape(shape: IShape): void {
    this._shape = shape

    // @ts-ignore
    if (typeof shape.getBody === 'function') {
      // @ts-ignore
      shape.getBody().sprite = this
    }
  }

  public render(context: CanvasRenderingContext2D): void {
    this._shape.draw(context)
  }

  public destroy() {
    this.isDestroyed = true
    // @ts-ignore
    if (typeof this._shape.getBody === 'function') {
      // @ts-ignore
      World.remove(this._shape.getBody())
    }
  }
}
