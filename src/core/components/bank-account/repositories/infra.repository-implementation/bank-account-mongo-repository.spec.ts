import { MongoHelper } from '@/infra/persistence/db/helpers/mongo-helper'
import { makeAccountNumber } from '@/user-interface/common/helpers/utils-helper'
import { Collection } from 'mongodb'
import { mockAgency, mockBankAccountModel } from '../../tests.mocks'
import { BankAccountMongoRepository } from './bank-account-mongo-repository'
import MockDate from 'mockdate'

let bankAccountCollection: Collection

describe('BankAccount Mongo Repository', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
    MockDate.set(new Date())
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
    MockDate.reset()
  })

  beforeEach(async () => {
    bankAccountCollection = await MongoHelper.getCollection('bank-account')
    await bankAccountCollection.deleteMany({})
  })

  const makeSut = (): BankAccountMongoRepository => {
    return new BankAccountMongoRepository()
  }

  describe('open()', () => {
    test('should return a bank account on open success', async () => {
      const sut = makeSut()
      const bankAccount = await sut.open(mockBankAccountModel())
      expect(bankAccount).toBeTruthy()
      expect(bankAccount.userId).toBeTruthy()
      expect(bankAccount.account).toBe(makeAccountNumber())
      expect(bankAccount.agency).toEqual(mockAgency())
      expect(bankAccount.balance).toBeGreaterThanOrEqual(0)
    })
  })
  describe('loadByUserId()', () => {
    test('should return an account on loadByUserId success', async () => {
      const sut = makeSut()
      await bankAccountCollection.insertOne(mockBankAccountModel())
      const bankAccount = await sut.loadByUserId('any_userId')
      expect(bankAccount).toBeTruthy()
      expect(bankAccount.userId).toBeTruthy()
      expect(bankAccount.account).toBe(makeAccountNumber())
      expect(bankAccount.agency).toEqual(mockAgency())
      expect(bankAccount.balance).toBeGreaterThanOrEqual(0)
    })
    test('should return null if loadByUserId dont find an bank account', async () => {
      const sut = makeSut()
      const bankAccount = await sut.loadByUserId('any_userId')
      expect(bankAccount).toBeFalsy()
    })
  })
// End
})
