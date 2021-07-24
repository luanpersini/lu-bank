import { makeLoginController } from '@/core/components/user-account/user-interface/api.controllers/login/infra.factories/login-controller-factory'
import { makeSignUpController } from '@/core/components/user-account/user-interface/api.controllers/signup/infra.factories/signup-controller-factory'
import { adaptRoute } from '@/infra/adapters/express/express-route-adapter'

import { Router } from 'express'

export default (router: Router): void => {
  router.post('/signup', adaptRoute(makeSignUpController()))
  router.post('/login', adaptRoute(makeLoginController()))
}
