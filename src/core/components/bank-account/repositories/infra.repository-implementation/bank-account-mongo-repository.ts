import { BankAccountModel } from '@/core/components/bank-account/domain/bank-account'
import { MongoHelper } from '@/infra/persistence/db/helpers/mongo-helper'
// import { MongoHelper } from '@/infra/persistence/db/helpers/mongo-helper'
import { LoadAccountByUserIdRepository } from '../load-bank-account-by-userid-repository'
import { OpenAccountRepository } from '../open-account-repository'

export class BankAccountMongoRepository implements OpenAccountRepository, LoadAccountByUserIdRepository {
  async open (bankAccount: BankAccountModel): Promise<BankAccountModel> {
    const bankAccountCollection = await MongoHelper.getCollection('bank-account')
    const result = await bankAccountCollection.insertOne(bankAccount)
    return MongoHelper.map(result.ops[0])
  }

  async loadByUserId (userId: string): Promise<BankAccountModel> {
    const bankAccountCollection = await MongoHelper.getCollection('bank-account')
    const bankAccount = await bankAccountCollection.findOne({ userId })
    return bankAccount
  }
}
