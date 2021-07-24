import { mockBankAccountModel, mockOpenAccount } from '@/core/components/bank-account/tests.mocks'
import { OpenAccountController } from './open-account-controller'
import { forbidden, ok, serverError } from '@/user-interface/common/helpers/http-helper'
import { HttpRequest, OpenAccount, AssociatedAccountError } from './open-account-controller-protocols'
import { ServerError } from '@/user-interface/common/errors'
import MockDate from 'mockdate'

type SutTypes = {
  sut: OpenAccountController
  openAccountStub: OpenAccount
}

const makeSut = (): SutTypes => {
  const openAccountStub = mockOpenAccount()
  const sut = new OpenAccountController(openAccountStub)
  return {
    sut,
    openAccountStub
  }
}

const mockFakeRequest = (): HttpRequest => ({
  body: {},
  userId: 'any_userId'
})

describe('openAccount.open', () => {
  beforeAll(() => {
    MockDate.set(new Date())
  })

  afterAll(() => {
    MockDate.reset()
  })
  test('should call openAccount with correct value', async () => {
    const { sut, openAccountStub } = makeSut()
    const Spy = jest.spyOn(openAccountStub, 'open')
    await sut.handle(mockFakeRequest())
    expect(Spy).toHaveBeenCalledWith('any_userId')
  })
  test('should return 500 if openAccount throws', async () => {
    const { sut, openAccountStub } = makeSut()
    jest.spyOn(openAccountStub, 'open').mockImplementationOnce(async () => {
      return Promise.reject(new Error())
    })
    const httpResponse = await sut.handle(mockFakeRequest())
    expect(httpResponse).toEqual(serverError(new ServerError(null)))
  })
  test('should return 403 if openAccount returns null -  Associated Account Error', async () => {
    const { sut, openAccountStub } = makeSut()
    jest.spyOn(openAccountStub, 'open').mockReturnValueOnce(Promise.resolve(null))
    const httpResponse = await sut.handle(mockFakeRequest())
    expect(httpResponse).toEqual(forbidden(new AssociatedAccountError()))
  })
  test('should return 200 and a bankAccount on openAccount success', async () => {
    const { sut } = makeSut()
    const httpResponse = await sut.handle(mockFakeRequest())
    expect(httpResponse).toEqual(ok(mockBankAccountModel()))
  })
})
