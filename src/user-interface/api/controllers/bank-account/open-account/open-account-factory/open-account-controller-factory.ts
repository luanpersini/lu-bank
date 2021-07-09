import { makeLogControllerDecorator } from '@/user-interface/common/decorators/log-controller-decorator-factory'
import { Controller } from '@/user-interface/common/interfaces'
import { OpenAccountController } from '../open-account-controller'

export const makeOpenAccountController = (): Controller => {
  const controller = new OpenAccountController()
  return makeLogControllerDecorator(controller)
}
