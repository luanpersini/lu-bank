import { DbAddAccount } from '@/core/components/user-account/usecases/add-account/db-add-account'
import { AddAccount } from '@/core/components/user-account/usecases/add-account/add-account'
import { AccountMongoRepository } from '@/core/components/user-account/infra.repository-implementations/account-mongo-repository'
import { BcryptAdapter } from '@/infra/adapters/hasher/bcrypt-adapter/bcrypt-adapter'

export const makeDbAddAccount = (): AddAccount => {
  const salt = 12
  const bcryptAdapter = new BcryptAdapter(salt)
  const accountMongoRepository = new AccountMongoRepository()
  return new DbAddAccount(bcryptAdapter, accountMongoRepository, accountMongoRepository)
}
