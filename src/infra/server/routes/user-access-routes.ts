import { adaptRoute } from '@/infra/adapters/express/express-route-adapter'
import { makeLoginController } from '@/infra/Factories/user-access/controllers/login/login-controller-factory'
import { makeSignUpController } from '@/infra/Factories/user-access/controllers/signup/signup-controller-factory'
import { Router } from 'express'

export default (router: Router): void => {
  router.post('/signup', adaptRoute(makeSignUpController()))
  router.post('/login', adaptRoute(makeLoginController()))
}
