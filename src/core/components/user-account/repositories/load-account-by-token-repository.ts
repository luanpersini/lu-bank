import { AccountModel } from '@/core/components/user-account/domain/account'

export interface LoadAccountByTokenRepository {
  loadByToken: (token: string) => Promise<AccountModel>
}
