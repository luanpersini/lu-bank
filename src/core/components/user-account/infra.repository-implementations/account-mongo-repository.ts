import { MongoHelper } from '@/infra/persistence/db/helpers/mongo-helper'
import { AddAccountParams } from '@/core/components/user-account/usecases/add-account/add-account'
import { AccountModel } from '@/core/components/user-account/domain/account'
import { AddAccountRepository } from '@/core/components/user-account/repositories/add-account-repository'
import { LoadAccountByEmailRepository } from '@/core/components/user-account/repositories/load-account-by-email-repository'
import { UpdateAccessTokenRepository } from '@/core/components/user-account/repositories/update-access-token-repository'
import { LoadAccountByTokenRepository } from '@/core/components/user-account/repositories/load-account-by-token-repository'

export class AccountMongoRepository implements AddAccountRepository, LoadAccountByEmailRepository, UpdateAccessTokenRepository, LoadAccountByTokenRepository {
  async add (accountData: AddAccountParams): Promise<AccountModel> {
    const accountCollection = await MongoHelper.getCollection('accounts')
    const result = await accountCollection.insertOne(accountData)
    return MongoHelper.map(result.ops[0])
  }

  async loadByEmail (email: string): Promise<AccountModel> {
    const accountCollection = await MongoHelper.getCollection('accounts')
    const account = await accountCollection.findOne({ email })
    return account && MongoHelper.map(account)
  }

  async updateAccessToken (id: string, token: string): Promise<void> {
    const accountCollection = await MongoHelper.getCollection('accounts')
    await accountCollection.updateOne({
      _id: id
    }, {
      $set: {
        accessToken: token
      }
    })
  }

  async loadByToken (token: string): Promise<AccountModel> {
    const accountCollection = await MongoHelper.getCollection('accounts')
    const account = await accountCollection.findOne({
      accessToken: token
    })
    return account && MongoHelper.map(account)
  }
}
