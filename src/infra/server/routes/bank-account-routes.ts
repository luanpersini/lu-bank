import { adaptRoute } from '@/infra/adapters/express/express-route-adapter'
import { OpenAccountController } from '@/user-interface/api/controllers/bank-account/open-account/open-account-controller'
import { auth } from '@/user-interface/common/middlewares'
import { Router } from 'express'

const openAccountController = new OpenAccountController()

export default (router: Router): void => {
  router.post('/open-account', auth, adaptRoute(openAccountController))
}
