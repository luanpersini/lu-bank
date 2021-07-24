import { makeOpenAccountController } from '@/core/components/bank-account/user-interface/api.controllers/open-account/infra.factories/open-account-controller-factory'
import { adaptRoute } from '@/infra/adapters/express/express-route-adapter'

import { auth } from '@/user-interface/common/middlewares'
import { Router } from 'express'

export default (router: Router): void => {
  router.post('/open-account', auth, adaptRoute(makeOpenAccountController()))
}
