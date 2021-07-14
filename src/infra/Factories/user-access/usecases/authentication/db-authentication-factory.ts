import env from '@/infra/server/config/env'
import { AccountMongoRepository } from '@/core/components/user-account/repositories/infra.repository-implementations/account-mongo-repository'
import { BcryptAdapter } from '@/infra/adapters/criptography/bcrypt-adapter/bcrypt-adapter'
import { JwtAdapter } from '@/infra/adapters/criptography/jwt-adapter/jwt-adapter'
import { DbAuthentication } from '@/core/components/user-account/usecases/authentication/db-authentication'
import { Authentication } from '@/core/components/user-account/usecases/authentication/authentication'

export const makeDbAuthentication = (): Authentication => {
  const salt = 12
  const bcryptAdapter = new BcryptAdapter(salt)
  const jwtAdapter = new JwtAdapter(env.jwtSecret)
  const accountMongoRepository = new AccountMongoRepository()
  return new DbAuthentication(accountMongoRepository, bcryptAdapter, jwtAdapter, accountMongoRepository)
}
