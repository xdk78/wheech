import IPhysics from './IPhysics'
import { Body, Engine, World, IEngineDefinition, Events } from 'matter-js'
import Sprite from './Sprite'

export default class Physics implements IPhysics {
  engine: Engine

  constructor(options: IEngineDefinition) {
    this.engine = Engine.create(options)

    Events.on(this.engine, 'collisionStart', function(event) {
      const bodies = event.pairs.slice()[0]
      const body = bodies.bodyA
      const collider = bodies.bodyB
      // @ts-ignore
      if (body.sprite && collider.sprite) {
        // @ts-ignore
        const sprite = body.sprite as Sprite
        // @ts-ignore
        const colliderSprite = collider.sprite as Sprite

        sprite.onCollisionStart.next(colliderSprite)
      }
    })

    Events.on(this.engine, 'collisionEnd', function(event) {
      const bodies = event.pairs.slice()[0]
      const body = bodies.bodyA
      const collider = bodies.bodyB
      // @ts-ignore
      if (body.sprite && collider.sprite) {
        // @ts-ignore
        const sprite = body.sprite as Sprite
        // @ts-ignore
        const colliderSprite = collider.sprite as Sprite

        sprite.onCollisionEnd.next(colliderSprite)
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
