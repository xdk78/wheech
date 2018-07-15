import IShape from './IShape'

export default interface ISprite {
  path?: any
  render(width, height): void
  setShape(shape: IShape)
}
