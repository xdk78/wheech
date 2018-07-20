import IPhysics from './IPhysics'
import { Body, Engine, World, IEngineDefinition, Events } from 'matter-js'
import Sprite from './Sprite'

class Collision {
  body: Sprite
  collider: Sprite
}

export default class Physics implements IPhysics {
  engine: Engine
  startCollisionsToProcess: Collision[] = []
  endCollisionsToProcess: Collision[] = []

  constructor(options: IEngineDefinition) {
    this.engine = Engine.create(options)

    Events.on(this.engine, 'collisionStart', event => {
      const bodies = event.pairs.slice()[0]
      const body = bodies.bodyA
      const collider = bodies.bodyB
      // @ts-ignore
      if (body.sprite && collider.sprite) {
        // @ts-ignore
        const sprite = body.sprite as Sprite
        // @ts-ignore
        const colliderSprite = collider.sprite as Sprite

        this.startCollisionsToProcess.push({
          body: sprite,
          collider: colliderSprite
        })
      }
    })

    Events.on(this.engine, 'beforeUpdate', event => {
      this.startCollisionsToProcess.forEach(element => {
        element.body.onCollisionStart.next(element.collider)
      })

      this.endCollisionsToProcess.forEach(element => {
        element.body.onCollisionEnd.next(element.collider)
      })

      this.startCollisionsToProcess = []
      this.endCollisionsToProcess = []
    })

    Events.on(this.engine, 'collisionEnd', event => {
      const bodies = event.pairs.slice()[0]
      const body = bodies.bodyA
      const collider = bodies.bodyB
      // @ts-ignore
      if (body.sprite && collider.sprite) {
        // @ts-ignore
        const sprite = body.sprite as Sprite
        // @ts-ignore
        const colliderSprite = collider.sprite as Sprite

        this.endCollisionsToProcess.push({
          body: sprite,
          collider: colliderSprite
        })
      }
    })
  }

  update() {
    Engine.update(this.engine, 1000 / 60)
  }

  addBody(body: Body) {
    World.add(this.engine.world, body)
  }
}
