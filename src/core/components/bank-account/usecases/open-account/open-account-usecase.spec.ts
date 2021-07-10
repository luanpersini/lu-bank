import { throwError } from '@/core/components/user-account/tests.mocks'
import { mockBankAccountModel, mockLoadBankAccountByUserIdRepository } from '../../tests.mocks'
import { OpenAccountUsecase } from './open-account-usecase'
import { LoadBankAccountByUserIdRepository } from './open-account-usecase-protocols'

type SutTypes = {
  sut: OpenAccountUsecase
  loadBankAccountByUserIdRepositoryStub: LoadBankAccountByUserIdRepository
  // openAccountRepositoryStub: OpenAccountRepository
}
const makeSut = (): SutTypes => {
  const loadBankAccountByUserIdRepositoryStub = mockLoadBankAccountByUserIdRepository()
  jest.spyOn(loadBankAccountByUserIdRepositoryStub, 'loadByUserId').mockReturnValue(Promise.resolve(null))
  // const openAccountRepositoryStub = mockOpenAccountRepository()
  const sut = new OpenAccountUsecase(loadBankAccountByUserIdRepositoryStub)
  return {
    sut,
    loadBankAccountByUserIdRepositoryStub
    // openAccountRepositoryStub
  }
}

describe('DbAddAccount Usecase', () => {
  test('should call LoadBankAccountByUserIdRepository with correct value', async () => {
    const { sut, loadBankAccountByUserIdRepositoryStub } = makeSut()
    const Spy = jest.spyOn(loadBankAccountByUserIdRepositoryStub, 'loadByUserId')
    await sut.open('any_userId')
    expect(Spy).toHaveBeenCalledWith('any_userId')
  })
  test('should return null if LoadBankAccountByUserIdRepository finds a bankAccount', async () => {
    const { sut, loadBankAccountByUserIdRepositoryStub } = makeSut()
    jest.spyOn(loadBankAccountByUserIdRepositoryStub, 'loadByUserId').mockReturnValueOnce(Promise.resolve(mockBankAccountModel()))
    const bankAccount = await sut.open('any_userId')
    expect(bankAccount).toBeNull()
  })
  test('should throw if LoadBankAccountByUserIdRepository throws - ensure there is no try catch', async () => {
    const { sut, loadBankAccountByUserIdRepositoryStub } = makeSut()
    jest.spyOn(loadBankAccountByUserIdRepositoryStub, 'loadByUserId').mockImplementationOnce(throwError)
    const promise = sut.open('any_userId')
    await expect(promise).rejects.toThrow()
  })

// End
})
/*
  test('should return an account on success', async () => {
    const { sut } = makeSut()
    const account = await sut.add(mockAddAccountParams())
    expect(account).toEqual(mockAccountModel())
  })
*/
