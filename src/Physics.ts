import IPhysics from './IPhysics'
import { Engine } from 'matter-js'

export default class Physics implements IPhysics {
  engine: Engine

  constructor(options: any) {
    this.engine = Engine.create(options)
  }

  update() {
    Engine.update(this.engine, 1000 / 60)
  }
}
