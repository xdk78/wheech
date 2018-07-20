import ISprite from './ISprite'
import IShape from './IShape'
import { Subject } from 'rxjs'

export default class Sprite implements ISprite {
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
}
