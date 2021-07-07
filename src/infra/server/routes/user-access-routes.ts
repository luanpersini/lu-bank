import { adaptRoute } from '@/infra/adapters/express/express-route-adapter'
import { makeLoginController } from '@/user-interface/api/controllers/user-access/factories/controllers/login/login-controller-factory'
import { makeSignUpController } from '@/user-interface/api/controllers/user-access/factories/controllers/signup/signup-controller-factory'
import { Router } from 'express'

export default (router: Router): void => {
  router.post('/signup', adaptRoute(makeSignUpController()))
  router.post('/login', adaptRoute(makeLoginController()))
}
