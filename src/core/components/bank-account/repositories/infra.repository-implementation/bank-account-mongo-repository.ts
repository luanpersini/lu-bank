import { BankAccountModel } from '@/core/components/bank-account/domain/bank-account'
// import { MongoHelper } from '@/infra/persistence/db/helpers/mongo-helper'
import { LoadAccountByUserIdRepository } from '../load-bank-account-by-userid-repository'
import { OpenAccountRepository, OpenBankAccountParams } from '../open-account-repository'

export class BankAccountMongoRepository implements OpenAccountRepository, LoadAccountByUserIdRepository {
  async open (bankAccount: OpenBankAccountParams): Promise<BankAccountModel> {
    //  2. - [ ] **Valida** se já existe uma conta bancária com o userId fornecido
    //  3. - [ ] Cria uma **conta bancária** para o usuário logado
    const mockBankAccountModel = ({
      userId: 'repo_userId',
      account: 'repo_account',
      agency: {
        number: 'repo_number',
        name: 'repo_name',
        address: 'repo_address'
      },
      openedAt: new Date(),
      balance: 1000
    })
    return mockBankAccountModel
  }

  async loadByUserId (userId: string): Promise<BankAccountModel> {
    /*
    const bankAccountCollection = await MongoHelper.getCollection('bank-account')
    const bankAccount = await bankAccountCollection.findOne({ userId })
    return bankAccount && MongoHelper.map(bankAccount)
    */
    return null
  }
}
