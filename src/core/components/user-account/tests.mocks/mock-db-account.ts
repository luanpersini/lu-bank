import { AddAccountRepository } from '@/core/components/user-account/repositories/add-account-repository'
import { LoadAccountByEmailRepository } from '@/core/components/user-account/repositories/load-account-by-email-repository'
import { LoadAccountByTokenRepository } from '@/core/components/user-account/repositories/load-account-by-token-repository'
import { UpdateAccessTokenRepository } from '@/core/components/user-account/repositories/update-access-token-repository'
import { AddAccountParams } from '@/core/components/user-account/usecases/add-account/add-account'
import { AccountModel } from '@/core/components/user-account/domain/account'
import { mockAccountModel } from '@/core/components/user-account/tests.mocks'

export const mockAddAccountRepository = (): AddAccountRepository => {
  class AddAccountRepositoryStub implements AddAccountRepository {
    async add (accountData: AddAccountParams): Promise<AccountModel> {
      return Promise.resolve(mockAccountModel())
    }
  }
  return new AddAccountRepositoryStub()
}

export const mockLoadAccountByEmailRepository = (): LoadAccountByEmailRepository => {
  class LoadAccountByEmailRepositoryStub implements LoadAccountByEmailRepository {
    async loadByEmail (email: string): Promise<AccountModel> {
      return Promise.resolve(mockAccountModel())
    }
  }
  return new LoadAccountByEmailRepositoryStub()
}

export const mockLoadAccountByTokenRepository = (): LoadAccountByTokenRepository => {
  class LoadAccountByTokenRepositoryStub implements LoadAccountByTokenRepository {
    async loadByToken (token: string): Promise<AccountModel> {
      return Promise.resolve(mockAccountModel())
    }
  }
  return new LoadAccountByTokenRepositoryStub()
}

export const mockUpdateAccessTokenRepository = (): UpdateAccessTokenRepository => {
  class UpdateAccessTokenRepositoryStub implements UpdateAccessTokenRepository {
    async updateAccessToken (id: string, token: string): Promise<void> {
      return Promise.resolve()
    }
  }
  return new UpdateAccessTokenRepositoryStub()
}
