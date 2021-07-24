import { makeLoginValidation } from './login-validation-factory'
import { makeLogControllerDecorator } from '@/user-interface/common/log/infra.log/log-controller-decorator-factory'
import { Controller } from '@/user-interface/common/interfaces'
import { makeDbAuthentication } from '../../../../usecases/authentication/infra.authentication-factory'
import { LoginController } from '../login-controller'

export const makeLoginController = (): Controller => {
  const controller = new LoginController(makeDbAuthentication(), makeLoginValidation())
  return makeLogControllerDecorator(controller)
}
