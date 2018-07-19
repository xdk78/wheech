import IPhysics from './IPhysics'
import { Engine, World, IEngineDefinition } from 'matter-js'

export default class Physics implements IPhysics {
  engine: Engine

  constructor(options: IEngineDefinition) {
    this.engine = Engine.create(options)
  }

  update() {
    Engine.update(this.engine, 1000 / 60)
  }

  addBody(body: Matter.Body) {
    World.add(this.engine.world, body)
  }
}
