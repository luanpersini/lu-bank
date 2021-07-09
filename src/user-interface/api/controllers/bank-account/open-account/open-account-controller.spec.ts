import { mockOpenAccount } from '@/core/components/bank-account/tests.mocks'
import { OpenAccountController } from './open-account-controller'
import { HttpRequest } from '@/user-interface/common/interfaces'
import { serverError } from '@/user-interface/common/helpers/http-helper'
import { OpenAccount } from '@/core/components/bank-account/usecases/open-account/open-account'
import { ServerError } from '@/user-interface/common/errors'

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
  /*

  describe('openAccount.open', () => {

    test('Should return 500 if openAccount throws', async () => {
      const { sut, openAccountStub } = makeSut()
      jest.spyOn(openAccountStub, 'open').mockImplementationOnce(async () => {
        return Promise.reject(new Error())
      })
      const httpResponse = await sut.handle(mockFakeRequest())
      expect(httpResponse).toEqual(serverError(new ServerError(null)))
    })
    test('Should return a bankAccount on success', async () => {
      const { sut } = makeSut()
      const account = await sut.load('any_token')
      expect(account).toEqual(mockAccountModel())
    })
  })
  */

  /*
    import MockDate from 'mockdate'

   beforeAll(() => {
    MockDate.set(new Date())
  })

  afterAll(() => {
    MockDate.reset()
  })

  test('Should return 403 if AddAccount returns null', async () => {
    const { sut, addAccountStub } = makeSut()
    jest.spyOn(addAccountStub, 'add').mockReturnValueOnce(Promise.resolve(null))
    const httpResponse = await sut.handle(mockFakeRequest())
    expect(httpResponse).toEqual(forbidden(new EmailInUseError()))
  })

  test('Should return 200 if valid data is provided', async () => {
    const { sut } = makeSut()
    const httpResponse = await sut.handle(mockFakeRequest())
    expect(httpResponse).toEqual(ok({ accessToken: 'any_token' }))
  })

  test('Should call Validation with correct value', async () => {
    const { sut, validationStub } = makeSut()
    const validateSpy = jest.spyOn(validationStub, 'validate')
    const httpRequest = mockFakeRequest()
    await sut.handle(httpRequest)
    expect(validateSpy).toHaveBeenCalledWith(httpRequest.body)
  })

  test('Should return 400 if Validation returns an error', async () => {
    const { sut, validationStub } = makeSut()
    jest.spyOn(validationStub, 'validate').mockReturnValueOnce(new MissingParamError('any_field'))
    const httpResponse = await sut.handle(mockFakeRequest())
    expect(httpResponse).toEqual(badRequest(new MissingParamError('any_field')))
  })

  test('Should call Authentication with correct values', async () => {
    const { sut, authenticationStub } = makeSut()
    const authSpy = jest.spyOn(authenticationStub, 'auth')
    await sut.handle(mockFakeRequest())
    expect(authSpy).toHaveBeenCalledWith({
      email: 'any_email@mail.com',
      password: 'any_password'
    })
  })

  test('Should return 500 if Authentication throws', async () => {
    const { sut, authenticationStub } = makeSut()
    jest.spyOn(authenticationStub, 'auth').mockImplementationOnce(throwError)
    const httpResponse = await sut.handle(mockFakeRequest())
    expect(httpResponse).toEqual(serverError(new Error()))
  })
  */
})
