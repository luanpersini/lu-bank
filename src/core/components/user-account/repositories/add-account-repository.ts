import { AddAccountParams } from '@/core/components/user-account/usecases/add-account/add-account'
import { AccountModel } from '@/core/components/user-account/domain/account'

export interface AddAccountRepository {
  add: (accountData: AddAccountParams) => Promise<AccountModel>
}
