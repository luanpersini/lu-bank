import { adaptRoute } from '@/infra/adapters/express/express-route-adapter'
import { makeOpenAccountController } from '@/infra/Factories/bank-account/controllers/open-account/open-account-controller-factory'
import { auth } from '@/user-interface/common/middlewares'
import { Router } from 'express'

export default (router: Router): void => {
  router.post('/open-account', auth, adaptRoute(makeOpenAccountController()))
}
