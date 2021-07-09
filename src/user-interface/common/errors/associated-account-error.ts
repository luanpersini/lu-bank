export class AssociatedAccountError extends Error {
  constructor () {
    super('There is already a bank account associated to this user.')
    this.name = 'AssociatedAccountError'
  }
}
