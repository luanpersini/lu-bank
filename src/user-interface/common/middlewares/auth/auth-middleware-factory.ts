import { makeDbLoadAccountByToken } from '@/core/components/user-account/usecases/load-account-by-token/infra.load-account-by-token-factory'
import { Middleware } from '@/user-interface/common/interfaces'
import { AuthMiddleware } from '@/user-interface/common/middlewares/auth/auth-middleware'

export const makeAuthMiddleware = (): Middleware => {
  return new AuthMiddleware(makeDbLoadAccountByToken())
}
