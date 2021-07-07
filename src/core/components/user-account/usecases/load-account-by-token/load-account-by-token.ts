import { AccountModel } from '@/core/components/user-account/domain/account'

export interface LoadAccountByToken {
  load: (accessToken: string) => Promise<AccountModel>
}
