import { throwError } from '@/core/components/user-account/tests.mocks'
import { mockBankAccountModel, mockLoadAccountByUserIdRepository, mockOpenAccountRepository } from '../../tests.mocks'
import { OpenAccountUsecase } from './open-account-usecase'
import { LoadAccountByUserIdRepository, OpenAccountRepository } from './open-account-usecase-protocols'
import MockDate from 'mockdate'

type SutTypes = {
  sut: OpenAccountUsecase
  loadAccountByUserIdRepositoryStub: LoadAccountByUserIdRepository
  openAccountRepositoryStub: OpenAccountRepository
}
const makeSut = (): SutTypes => {
  const loadAccountByUserIdRepositoryStub = mockLoadAccountByUserIdRepository()
  jest.spyOn(loadAccountByUserIdRepositoryStub, 'loadByUserId').mockReturnValue(Promise.resolve(null))
  const openAccountRepositoryStub = mockOpenAccountRepository()
  const sut = new OpenAccountUsecase(loadAccountByUserIdRepositoryStub,openAccountRepositoryStub)
  return {
    sut,
    loadAccountByUserIdRepositoryStub,
    openAccountRepositoryStub
  }
}

describe('OpenAccount Usecase', () => {
  beforeAll(() => {
    MockDate.set(new Date())
  })

  afterAll(() => {
    MockDate.reset()
  })

  test('should call LoadAccountByUserIdRepository with correct value', async () => {
    const { sut, loadAccountByUserIdRepositoryStub } = makeSut()
    const Spy = jest.spyOn(loadAccountByUserIdRepositoryStub, 'loadByUserId')
    await sut.open('any_userId')
    expect(Spy).toHaveBeenCalledWith('any_userId')
  })
  test('should return null if LoadAccountByUserIdRepository finds a bankAccount', async () => {
    const { sut, loadAccountByUserIdRepositoryStub } = makeSut()
    jest.spyOn(loadAccountByUserIdRepositoryStub, 'loadByUserId').mockReturnValueOnce(Promise.resolve(mockBankAccountModel()))
    const bankAccount = await sut.open('any_userId')
    expect(bankAccount).toBeNull()
  })
  test('should throw if LoadAccountByUserIdRepository throws - ensure there is no try catch', async () => {
    const { sut, loadAccountByUserIdRepositoryStub } = makeSut()
    jest.spyOn(loadAccountByUserIdRepositoryStub, 'loadByUserId').mockImplementationOnce(throwError)
    const promise = sut.open('any_userId')
    await expect(promise).rejects.toThrow()
  })
  test('should call OpenAccountRepository with correct values', async () => {
    const { sut, openAccountRepositoryStub } = makeSut()
    const Spy = jest.spyOn(openAccountRepositoryStub, 'open')
    await sut.open('any_userId')
    expect(Spy).toHaveBeenCalledWith(mockBankAccountModel())
  })
  test('should return a bank account on OpenAccountRepository success', async () => {
    const { sut } = makeSut()
    const account = await sut.open('any_userId')
    expect(account).toEqual(mockBankAccountModel())
  })
  test('should throw if OpenAccountRepository throws - ensure there is no try catch', async () => {
    const { sut, openAccountRepositoryStub } = makeSut()
    jest.spyOn(openAccountRepositoryStub, 'open').mockImplementationOnce(throwError)
    const promise = sut.open('any_userId')
    await expect(promise).rejects.toThrow()
  })
// End
})
