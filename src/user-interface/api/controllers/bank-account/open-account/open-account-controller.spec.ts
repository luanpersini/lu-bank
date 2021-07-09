// import { OpenAccountController } from './open-account-controller'
// import { HttpRequest } from '@/user-interface/common/interfaces'
// import { serverError } from '@/user-interface/common/helpers/http/http-helper'
// import { mockOpenAccount } from '@/tests/mock-db-bank-account'
// import { OpenAccount } from '@/core/components/bank-account/usecases/open-account/open-account'
// import { ServerError } from '@/user-interface/common/errors'
// import { mockLoadAccountByTokenRepository } from '@/tests'

/*
type SutTypes = {
  sut: OpenAccountController
}

const makeSut = (): SutTypes => {
  // const authenticationStub = mockAuthentication()
  // const openAccountStub = mockOpenAccount()
  // const loadAccountByTokenRepositoryStub = mockLoadAccountByTokenRepository()
  const sut = new OpenAccountController()
  return {
    sut
  }
}
*/
describe('OpenAccount Controller', () => {
  test('no test yet', async () => {
    const Spy = 2 + 2
    expect(Spy).toBe(4)
  })
  /*
  test('Should call loadBankAccountByUserId with correct userId', async () => {
    const { sut } = makeSut()
    const Spy = jest.spyOn(loadBankAccountByUserId, 'open')
    await sut.handle(mockFakeRequest())
    expect(Spy).toHaveBeenCalledWith('any_userId')
  })

  const makeSut = (): SutTypes => {
  // const authenticationStub = mockAuthentication()
  const openAccountStub = mockOpenAccount()
  const loadAccountByTokenRepositoryStub = mockLoadAccountByTokenRepository()
  const sut = new OpenAccountController(openAccountStub, loadAccountByTokenRepositoryStub)
  return {
    sut,
    openAccountStub,
    loadAccountByTokenRepositoryStub
  }
}
  // 4. - [ ] Cria uma **conta bancária** para o usuário logado
  describe('openAccount.open', () => {
    test('Should call openAccount with correct userId', async () => {
      const { sut, openAccountStub } = makeSut()
      const Spy = jest.spyOn(openAccountStub, 'open')
      await sut.handle(mockFakeRequest())
      expect(Spy).toHaveBeenCalledWith('any_userId')
    })
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
