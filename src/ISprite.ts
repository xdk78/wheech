import IShape from './IShape'

export default interface ISprite {
  render(context: CanvasRenderingContext2D, width: number, height: number): void
  setShape(shape: IShape): void
}
