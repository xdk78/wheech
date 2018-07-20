import ISprite from './ISprite'
import IShape from './IShape'

export default class Sprite implements ISprite {
  private _shape: IShape

  public setShape(shape: IShape): void {
    this._shape = shape
  }

  public render(context: CanvasRenderingContext2D): void {
    this._shape.draw(context, 0)
  }
}
