import { makeLoginValidation } from './login-validation-factory'
import { makeLogControllerDecorator } from '@/user-interface/common/decorators/log-controller-decorator-factory'
import { Controller } from '@/user-interface/common/interfaces'
import { LoginController } from '@/user-interface/api/controllers/user-access/login/login-controller'
import { makeDbAuthentication } from '@/infra/usecases-factory/user-account/authentication/db-authentication-factory'

export const makeLoginController = (): Controller => {
  const controller = new LoginController(makeDbAuthentication(), makeLoginValidation())
  return makeLogControllerDecorator(controller)
}
