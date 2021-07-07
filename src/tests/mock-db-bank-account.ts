import { BankAccountModel } from '@/core/components/bank-account/domain/bank-account'
import { OpenAccount } from '@/core/components/bank-account/usecases/open-account/open-account'
import { mockBankAccountModel } from './mock-bank-account-model'

export const mockOpenAccount = (): OpenAccount => {
  class OpenAccountStub implements OpenAccount {
    async open (userId: string): Promise<BankAccountModel> {
      return Promise.resolve(mockBankAccountModel())
    }
  }
  return new OpenAccountStub()
}
