import env from '@/infra/server/config/env'
import { LoadAccountByToken } from '@/core/components/user-account/usecases/load-account-by-token/load-account-by-token'
import { DbLoadAccountByToken } from '@/core/components/user-account/usecases/load-account-by-token/db-load-account-by-token'
import { AccountMongoRepository } from '@/core/components/user-account/repositories/infra.repository-implementations/account-mongo-repository'
import { JwtAdapter } from '@/infra/adapters/criptography/jwt-adapter/jwt-adapter'

export const makeDbLoadAccountByToken = (): LoadAccountByToken => {
  const jwtAdapter = new JwtAdapter(env.jwtSecret)
  const accountMongoRepository = new AccountMongoRepository()
  return new DbLoadAccountByToken(jwtAdapter, accountMongoRepository)
}
