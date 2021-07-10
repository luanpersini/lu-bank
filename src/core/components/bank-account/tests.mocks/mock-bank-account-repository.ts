import { mockBankAccountModel } from './index'
import { BankAccountModel, LoadBankAccountByUserIdRepository, OpenAccountRepository, OpenBankAccountParams } from '../usecases/open-account/open-account-usecase-protocols'

export const mockOpenAccountRepository = (): OpenAccountRepository => {
  class OpenAccountRepositoryStub implements OpenAccountRepository {
    async open (bankAccount: OpenBankAccountParams): Promise<BankAccountModel> {
      return Promise.resolve(mockBankAccountModel())
    }
  }
  return new OpenAccountRepositoryStub()
}

export const mockLoadBankAccountByUserIdRepository = (): LoadBankAccountByUserIdRepository => {
  class LoadBankAccountByUserIdRepositoryStub implements LoadBankAccountByUserIdRepository {
    async loadByUserId (UserId: string): Promise<BankAccountModel> {
      return Promise.resolve(mockBankAccountModel())
    }
  }
  return new LoadBankAccountByUserIdRepositoryStub()
}
