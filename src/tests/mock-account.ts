import { AccountModel } from '@/core/components/user-account/domain/account'
import { AddAccountParams } from '@/core/components/user-account/usecases/add-account/add-account'
import { AuthenticationParams } from '@/core/components/user-account/usecases/authentication/authentication'

export const mockAddAccountParams = (): AddAccountParams => ({
  name: 'any_name',
  cpf: 'any_cpf',
  email: 'any_email@mail.com',
  password: 'any_password'
})

export const mockAccountModel = (): AccountModel => Object.assign({}, mockAddAccountParams(), { id: 'any_id' })

export const mockAuthenticationParams = (): AuthenticationParams => ({
  email: 'any_email@mail.com',
  password: 'any_password'
})
