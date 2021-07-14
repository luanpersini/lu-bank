import { OpenAccount } from '@/core/components/bank-account/usecases/open-account/open-account'
import { OpenAccountUsecase } from '@/core/components/bank-account/usecases/open-account/open-account-usecase'
import { BankAccountMongoRepository } from '@/core/components/bank-account/repositories/infra.repository-implementation/bank-account-mongo-repository'
export const makeOpenBankAccountUsecase = (): OpenAccount => {
  const bankAccountMongoRepository = new BankAccountMongoRepository()
  return new OpenAccountUsecase(bankAccountMongoRepository, bankAccountMongoRepository)
}
