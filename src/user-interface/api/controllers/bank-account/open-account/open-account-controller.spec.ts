import { OpenAccountController } from './open-account-controller'
import { HttpRequest } from '@/user-interface/common/interfaces'
import { mockOpenAccount } from '@/tests/mock-db-bank-account'
import { OpenAccount } from '@/core/components/bank-account/usecases/open-account/open-account'

/*
import { MissingParamError, ServerError, EmailInUseError } from '@/user-interface/common/errors'
import { ok, serverError, badRequest, forbidden } from '@/user-interface/common/helpers/http/http-helper'
*/

type SutTypes = {
  sut: OpenAccountController
  openAccountStub: OpenAccount
}

const makeSut = (): SutTypes => {
  // const authenticationStub = mockAuthentication()
  const openAccountStub = mockOpenAccount()
  const sut = new OpenAccountController(openAccountStub)
  return {
    sut,
    openAccountStub
  }
}
const makeFakeRequest = (): HttpRequest => ({
  body: {
    userId: 'any_userId'
  }
})

describe('OpenAccount Controller', () => {
  test('Should call open account with correct values', async () => {
    const { sut, openAccountStub } = makeSut()
    const Spy = jest.spyOn(openAccountStub, 'open')
    await sut.handle(makeFakeRequest())
    expect(Spy).toHaveBeenCalledWith('any_userId')
  })

  /*
  test('Should call open account with correct values', async () => {
    const { sut } = makeSut()
    const response = await sut.handle(makeFakeRequest())
    expect(response.statusCode).toBe(400)
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

  test('Should return 500 if AddAccount throws', async () => {
    const { sut, addAccountStub } = makeSut()
    jest.spyOn(addAccountStub, 'add').mockImplementationOnce(async () => {
      return Promise.reject(new Error())
    })
    const httpResponse = await sut.handle(makeFakeRequest())
    expect(httpResponse).toEqual(serverError(new ServerError(null)))
  })

  test('Should call AddAccount with correct values', async () => {
    const { sut, addAccountStub } = makeSut()
    const addSpy = jest.spyOn(addAccountStub, 'add')
    await sut.handle(makeFakeRequest())
    expect(addSpy).toHaveBeenCalledWith({
      name: 'any_name',
      email: 'any_email@mail.com',
      password: 'any_password'
    })
  })

  test('Should return 403 if AddAccount returns null', async () => {
    const { sut, addAccountStub } = makeSut()
    jest.spyOn(addAccountStub, 'add').mockReturnValueOnce(Promise.resolve(null))
    const httpResponse = await sut.handle(makeFakeRequest())
    expect(httpResponse).toEqual(forbidden(new EmailInUseError()))
  })

  test('Should return 200 if valid data is provided', async () => {
    const { sut } = makeSut()
    const httpResponse = await sut.handle(makeFakeRequest())
    expect(httpResponse).toEqual(ok({ accessToken: 'any_token' }))
  })

  test('Should call Validation with correct value', async () => {
    const { sut, validationStub } = makeSut()
    const validateSpy = jest.spyOn(validationStub, 'validate')
    const httpRequest = makeFakeRequest()
    await sut.handle(httpRequest)
    expect(validateSpy).toHaveBeenCalledWith(httpRequest.body)
  })

  test('Should return 400 if Validation returns an error', async () => {
    const { sut, validationStub } = makeSut()
    jest.spyOn(validationStub, 'validate').mockReturnValueOnce(new MissingParamError('any_field'))
    const httpResponse = await sut.handle(makeFakeRequest())
    expect(httpResponse).toEqual(badRequest(new MissingParamError('any_field')))
  })

  test('Should call Authentication with correct values', async () => {
    const { sut, authenticationStub } = makeSut()
    const authSpy = jest.spyOn(authenticationStub, 'auth')
    await sut.handle(makeFakeRequest())
    expect(authSpy).toHaveBeenCalledWith({
      email: 'any_email@mail.com',
      password: 'any_password'
    })
  })

  test('Should return 500 if Authentication throws', async () => {
    const { sut, authenticationStub } = makeSut()
    jest.spyOn(authenticationStub, 'auth').mockImplementationOnce(throwError)
    const httpResponse = await sut.handle(makeFakeRequest())
    expect(httpResponse).toEqual(serverError(new Error()))
  })
  */
})
