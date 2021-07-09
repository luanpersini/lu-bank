import { makeOpenBankAccountUsecase } from '@/infra/usecases-factory/bank-account/open-account/open-account-usecase-factory'
import { makeLogControllerDecorator } from '@/user-interface/common/decorators/log-controller-decorator-factory'
import { Controller } from '@/user-interface/common/interfaces'
import { OpenAccountController } from '../open-account-controller'

export const makeOpenAccountController = (): Controller => {
  const controller = new OpenAccountController(makeOpenBankAccountUsecase())
  return makeLogControllerDecorator(controller)
}
