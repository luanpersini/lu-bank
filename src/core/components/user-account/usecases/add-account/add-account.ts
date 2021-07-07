import { AccountModel } from '@/core/components/user-account/domain/account'

export type AddAccountParams = Omit<AccountModel, 'id'>

export interface AddAccount {
  add: (account: AddAccountParams) => Promise<AccountModel>
}
