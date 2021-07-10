import { mockBankAccountModel } from '../../tests.mocks'
import { BankAccountModel, LoadBankAccountByUserIdRepository, OpenAccount } from './open-account-usecase-protocols'
export class OpenAccountUsecase implements OpenAccount {
  constructor (
    private readonly loadBankAccountByUserIdRepository: LoadBankAccountByUserIdRepository
    // private readonly openAccountRepository: OpenAccountRepository
  ) {}

  async open (userId: string): Promise<BankAccountModel> {
    const bankAccountExists = await this.loadBankAccountByUserIdRepository.loadByUserId(userId)
    if (!bankAccountExists) {
      return mockBankAccountModel()
    }
    return Promise.resolve(null)
  }
}

/*
    const bankAccount = await this.loadBankAccountByUserIdRepository.loadByUserId(userId)
    if (!bankAccount) {
      const bankAccountData: OpenBankAccountParams = ({
        userId: userId,
        account: 'generate_random_account',
        agency: {
          number: '0000-1',
          name: 'Digital',
          address: 'Digital'
        },
        balance: 1000
      })
      const newBankAccount = await this.openAccountRepository.open(bankAccountData)
      return newBankAccount
    }
    */
