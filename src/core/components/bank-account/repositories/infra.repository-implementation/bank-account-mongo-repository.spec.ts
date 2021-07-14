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
  })

// End
})
/*
  describe('loadByEmail()', () => {
    test('should return an account on loadByEmail success', async () => {
      const sut = makeSut()
      await accountCollection.insertOne(mockBankAccountModel())
      const account = await sut.loadByEmail('any_email@mail.com')
      expect(account).toBeTruthy()
      expect(account.id).toBeTruthy()
      expect(account.name).toBe('any_name')
      expect(account.cpf).toBe('any_cpf')
      expect(account.email).toBe('any_email@mail.com')
      expect(account.password).toBe('any_password')
    })

    test('should return null if loadByEmail fails', async () => {
      const sut = makeSut()
      const account = await sut.loadByEmail('any_email@mail.com')
      expect(account).toBeFalsy()
    })
  })

  describe('loadByToken()', () => {
    test('should return an account on loadByToken', async () => {
      const sut = makeSut()
      await accountCollection.insertOne({
        name: 'any_name',
        cpf: 'any_cpf',
        email: 'any_email@mail.com',
        password: 'any_password',
        accessToken: 'any_token'
      })
      const account = await sut.loadByToken('any_token')
      expect(account).toBeTruthy()
      expect(account.id).toBeTruthy()
      expect(account.name).toBe('any_name')
      expect(account.cpf).toBe('any_cpf')
      expect(account.email).toBe('any_email@mail.com')
      expect(account.password).toBe('any_password')
    })

     })
  })
})
*/
