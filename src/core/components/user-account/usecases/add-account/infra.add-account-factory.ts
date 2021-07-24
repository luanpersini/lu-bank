import { DbAddAccount } from '@/core/components/user-account/usecases/add-account/db-add-account'
import { AddAccount } from '@/core/components/user-account/usecases/add-account/add-account'
import { AccountMongoRepository } from '@/core/components/user-account/infra.repository-implementations/account-mongo-repository'
import { BcryptJsAdapter } from '@/infra/adapters/hasher/bcryptjs-adapter/bcryptjs-adapter'

export const makeDbAddAccount = (): AddAccount => {
  const salt = 12
  const bcryptAdapter = new BcryptJsAdapter(salt)
  const accountMongoRepository = new AccountMongoRepository()
  return new DbAddAccount(bcryptAdapter, accountMongoRepository, accountMongoRepository)
}
