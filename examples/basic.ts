// WIP THIS IS MOCK CURRENTLY
import Wheech, { Player, Sprite } from '../src/index'
const wheech = new Wheech()

const game = wheech.createGame('game', { width: 200, height: 200 })
const player = new Player('John')
const ctx = game.context
const rectangle = new Sprite(ctx, 200, 200, 'red')
game.addScene(player, 'blue', [rectangle])
game.run()
