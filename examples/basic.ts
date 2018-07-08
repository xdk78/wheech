// WIP THIS IS MOCK CURRENTLY
import Wheech, { Player, Sprite } from '../src/index'
const wheech = new Wheech()

const game = wheech.createGame({ width: 200, height: 200 })
const player = new Player('John')
const rectangle = new Sprite(200, 200)
game.addScene(player, 'blue', [rectangle])
game.run()
