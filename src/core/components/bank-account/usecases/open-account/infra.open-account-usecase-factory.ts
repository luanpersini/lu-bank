import { OpenAccount } from '@/core/components/bank-account/usecases/open-account/open-account'
import { OpenAccountUsecase } from '@/core/components/bank-account/usecases/open-account/open-account-usecase'
import { BankAccountMongoRepository } from '../../infra.repository-implementation/bank-account-mongo-repository'

export const makeOpenBankAccountUsecase = (): OpenAccount => {
  const bankAccountRepository = new BankAccountMongoRepository()
  return new OpenAccountUsecase(bankAccountRepository, bankAccountRepository)
}
