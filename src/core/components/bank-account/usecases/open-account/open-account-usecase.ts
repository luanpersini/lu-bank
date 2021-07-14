import { BankAccountModel, LoadAccountByUserIdRepository, OpenAccount, OpenAccountRepository } from './open-account-usecase-protocols'
export class OpenAccountUsecase implements OpenAccount {
  constructor (
    private readonly loadAccountByUserIdRepository: LoadAccountByUserIdRepository,
    private readonly openAccountRepository: OpenAccountRepository
  ) {}

  async open (userId: string): Promise<BankAccountModel> {
    const bankAccountExists = await this.loadAccountByUserIdRepository.loadByUserId(userId)
    if (!bankAccountExists) {
      const newBankAccount = await this.openAccountRepository.open({
        userId: userId,
        // generate a random 8 digit string with the last 8 digits of the unix time
        account: String(new Date().getTime()).substring(String(new Date().getTime()).length - 8, String(new Date().getTime()).length),
        agency: {
          number: '0000-1',
          name: 'Digital',
          address: 'Digital'
        },
        openedAt: new Date(),
        balance: 1000
      })
      return newBankAccount
    }
    return Promise.resolve(null)
  }
}
