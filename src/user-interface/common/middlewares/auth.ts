import { adaptMiddleware } from '@/infra/adapters/express/express-middleware-adapter'
import { makeAuthMiddleware } from '@/user-interface/middlewares/auth-middleware-factory'

export const auth = adaptMiddleware(makeAuthMiddleware())
