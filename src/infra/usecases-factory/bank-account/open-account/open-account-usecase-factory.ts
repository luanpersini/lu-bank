import { OpenAccount } from '@/core/components/bank-account/usecases/open-account/open-account'
import { OpenAccountUsecase } from '@/core/components/bank-account/usecases/open-account/open-account-usecase'

export const makeOpenBankAccountUsecase = (): OpenAccount => {
  return new OpenAccountUsecase()
}
