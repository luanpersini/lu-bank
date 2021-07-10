import { BankAccountModel } from '@/core/components/bank-account/domain/bank-account'

export interface LoadBankAccountByUserIdRepository {
  loadByUserId: (userId: string) => Promise<BankAccountModel>
}
