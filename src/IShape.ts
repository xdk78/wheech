import Vector2d from './Vector2d'

export default interface IShape {
  draw(vector: Vector2d, rotation: number)
}
