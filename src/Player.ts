import IPlayer from './IPlayer'

export default class Player implements IPlayer {
  id: number = 0

  constructor(name?: string) {
    this.id += 1
  }

  public get Id(): number {
    return this.id
  }
}
