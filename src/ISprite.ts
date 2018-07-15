import IShape from './IShape'

export default interface ISprite {
  path?: any
  render(): void
  setShape(shape: IShape)
}
