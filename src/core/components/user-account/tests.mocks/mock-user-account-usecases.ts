import { AddAccount, AddAccountParams } from '@/core/components/user-account/usecases/add-account/add-account'
import { Authentication, AuthenticationParams } from '@/core/components/user-account/usecases/authentication/authentication'
import { LoadAccountByToken } from '@/core/components/user-account/usecases/load-account-by-token/load-account-by-token'
import { AccountModel } from '@/core/components/user-account/domain/account'
import { mockAccountModel } from '@/core/components/user-account/tests.mocks'

export const mockAddAccount = (): AddAccount => {
  class AddAccountStub implements AddAccount {
    async add (account: AddAccountParams): Promise<AccountModel> {
      return Promise.resolve(mockAccountModel())
    }
  }
  return new AddAccountStub()
}

export const mockAuthentication = (): Authentication => {
  class AuthenticationStub implements Authentication {
    async auth (authentication: AuthenticationParams): Promise<string> {
      return Promise.resolve('any_token')
    }
  }
  return new AuthenticationStub()
}

export const mockLoadAccountByToken = (): LoadAccountByToken => {
  class LoadAccountByTokenStub implements LoadAccountByToken {
    async load (accessToken: string): Promise<AccountModel> {
      return Promise.resolve(mockAccountModel())
    }
  }
  return new LoadAccountByTokenStub()
}
