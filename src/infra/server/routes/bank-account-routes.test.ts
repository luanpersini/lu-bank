describe('BankAccount Routes', () => {
  test('no test yet', async () => {
    const Spy = 2 + 2
    expect(Spy).toBe(4)
  })
})

/*
import app from '@/infra/server/config/app'
import { MongoHelper } from '@/infra/persistence/db/helpers/mongo-helper'
import { Collection } from 'mongodb'
import request from 'supertest'

let accountCollection: Collection

describe('User Access Routes', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    accountCollection = await MongoHelper.getCollection('accounts')
    await accountCollection.deleteMany({})
  })

  describe('POST /signup', () => {
    test('Should return 200 on signup', async () => {
      await request(app)
        .post('/api/signup')
        .send({
          name: 'Rodrigo',
          cpf: '123.456.789-00',
          email: 'rodrigo.manguinho@gmail.com',
          password: '123',
          passwordConfirmation: '123'
        })
        .expect(200)
      await request(app)
        .post('/api/signup')
        .send({
          name: 'Rodrigo',
          cpf: '123.456.789-00',
          email: 'rodrigo.manguinho@gmail.com',
          password: '123',
          passwordConfirmation: '123'
        })
        .expect(403)
    })
  })
})
*/
