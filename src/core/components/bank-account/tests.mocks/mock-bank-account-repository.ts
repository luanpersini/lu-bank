import { mockBankAccountModel } from './index'
import { BankAccountModel, LoadAccountByUserIdRepository, OpenAccountRepository } from '../usecases/open-account/open-account-usecase-protocols'

export const mockOpenAccountRepository = (): OpenAccountRepository => {
  class OpenAccountRepositoryStub implements OpenAccountRepository {
    async open (bankAccount: BankAccountModel): Promise<BankAccountModel> {
      return Promise.resolve(mockBankAccountModel())
    }
  }
  return new OpenAccountRepositoryStub()
}

export const mockLoadAccountByUserIdRepository = (): LoadAccountByUserIdRepository => {
  class LoadAccountByUserIdRepositoryStub implements LoadAccountByUserIdRepository {
    async loadByUserId (UserId: string): Promise<BankAccountModel> {
      return Promise.resolve(mockBankAccountModel())
    }
  }
  return new LoadAccountByUserIdRepositoryStub()
}
