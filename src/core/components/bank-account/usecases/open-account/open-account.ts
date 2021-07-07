import { BankAccountModel } from '@/core/components/bank-account/domain/bank-account'

export interface OpenAccount {
  open: (userId: string) => Promise<BankAccountModel>
}
