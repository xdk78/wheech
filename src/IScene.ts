import Player from './Player'

export default interface IScene {
  player?: Player
  background?: any
  draw(canvasWidth: number, canvasHeight: number): void
}
