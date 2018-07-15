import Vector2d from './Vector2d'

export default interface IShape {
  draw(canvasWidth: number, canvasHeight: number, vector: Vector2d, rotation: number): void
}
