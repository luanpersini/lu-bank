import { makeSignUpValidation } from './signup-validation-factory'
import { makeDbAuthentication } from '@/user-interface/api/controllers/user-access/factories/usecases/user-account/authentication/db-authentication-factory'
import { makeDbAddAccount } from '@/user-interface/api/controllers/user-access/factories/usecases/user-account/add-account/db-add-account-factory'
import { makeLogControllerDecorator } from '@/user-interface/common/decorators/log-controller-decorator-factory'
import { SignUpController } from '@/user-interface/api/controllers/user-access/signup/signup-controller'
import { Controller } from '@/user-interface/common/interfaces'

export const makeSignUpController = (): Controller => {
  const controller = new SignUpController(makeDbAddAccount(), makeSignUpValidation(), makeDbAuthentication())
  return makeLogControllerDecorator(controller)
}
