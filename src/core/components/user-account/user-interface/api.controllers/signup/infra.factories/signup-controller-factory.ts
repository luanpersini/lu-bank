import { makeSignUpValidation } from './signup-validation-factory'
import { makeDbAuthentication } from '../../../../usecases/authentication/infra.authentication-factory'
import { makeDbAddAccount } from '../../../../usecases/add-account/infra.add-account-factory'
import { makeLogControllerDecorator } from '@/user-interface/common/log/infra.log/log-controller-decorator-factory'
import { Controller } from '@/user-interface/common/interfaces'
import { SignUpController } from '../signup-controller'

export const makeSignUpController = (): Controller => {
  const controller = new SignUpController(makeDbAddAccount(), makeSignUpValidation(), makeDbAuthentication())
  return makeLogControllerDecorator(controller)
}
