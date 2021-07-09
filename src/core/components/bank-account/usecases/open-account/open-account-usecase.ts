// import { BankAccountModel, OpenAccount, LoadAccountByUserIdRepository, OpenAccountRepository, OpenBankAccountParams } from './open-account-usecase-protocols'
import { BankAccountModel, OpenAccount } from './open-account-usecase-protocols'
export class OpenAccountUsecase implements OpenAccount {
  /*
  constructor (
    private readonly loadAccountByUserIdRepository: LoadAccountByUserIdRepository,
    private readonly openAccountRepository: OpenAccountRepository
  ) {}
*/
  async open (userId: string): Promise<BankAccountModel> {
    /*
    const bankAccount = await this.loadAccountByUserIdRepository.loadByUserId(userId)
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
    return null
  }
}
