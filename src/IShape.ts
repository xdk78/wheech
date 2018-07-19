import Vector2d from './Vector2d'

export default interface IShape {
  draw(context: CanvasRenderingContext2D, canvasWidth: number, canvasHeight: number, vector: Vector2d, rotation: number): void
}
