export class UserIdInUseError extends Error {
  constructor () {
    super('There is already a bank account associated to this user.')
    this.name = 'UserIdInUseError'
  }
}
