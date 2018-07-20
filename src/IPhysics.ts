import { Body } from 'matter-js'
export default interface IPhysics {
  update(): void
  addBody(body: Body)
}
