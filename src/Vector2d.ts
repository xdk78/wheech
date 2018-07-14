export default class Vector2d {
  private _x: number
  private _y: number
  constructor(x: number, y: number) {
    this._x = x
    this._y = y
  }

  public get getX(): number {
    return this._x
  }

  public get getY(): number {
    return this._y
  }

  public set setY(y: number) {
    this._y = y
  }

  public set setX(x: number) {
    this._x = x
  }
}
