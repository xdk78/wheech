export default interface IPhysics {
  update(): void
  addBody(body: Matter.Body)
}
