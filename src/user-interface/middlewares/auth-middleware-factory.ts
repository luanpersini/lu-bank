import { makeDbLoadAccountByToken } from '@/infra/Factories/user-access/usecases/load-account-by-token/db-load-account-by-token-factory'
import { Middleware } from '@/user-interface/common/interfaces'
import { AuthMiddleware } from '@/user-interface/middlewares/auth-middleware'

export const makeAuthMiddleware = (): Middleware => {
  return new AuthMiddleware(makeDbLoadAccountByToken())
}
