import { makeOpenBankAccountUsecase } from '../../../../usecases/open-account/infra.open-account-usecase-factory'
import { makeLogControllerDecorator } from '@/user-interface/common/log/infra.log/log-controller-decorator-factory'
import { Controller } from '@/user-interface/common/interfaces'
import { OpenAccountController } from '@/core/components/bank-account/user-interface/api.controllers/open-account/open-account-controller'

export const makeOpenAccountController = (): Controller => {
  const controller = new OpenAccountController(makeOpenBankAccountUsecase())
  return makeLogControllerDecorator(controller)
}
