import { BankAccountModel } from '@/core/components/bank-account/domain/bank-account'

export interface LoadAccountByUserIdRepository {
  loadByUserId: (userId: string) => Promise<BankAccountModel>
}
