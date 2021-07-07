import { AccountModel } from '@/core/components/user-account/domain/account'

export interface LoadAccountByEmailRepository {
  loadByEmail: (email: string) => Promise<AccountModel>
}
