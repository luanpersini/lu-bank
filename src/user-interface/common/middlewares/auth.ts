import { adaptMiddleware } from '@/infra/adapters/express/express-middleware-adapter'
import { makeAuthMiddleware } from '@/user-interface/common/middlewares/auth/auth-middleware-factory'

export const auth = adaptMiddleware(makeAuthMiddleware())
