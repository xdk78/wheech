export default interface IScene {
  background?: any
  draw(context: CanvasRenderingContext2D, canvasWidth: number, canvasHeight: number): void
}
