import { BankAccountModel } from '../domain/bank-account'

export interface OpenAccountRepository {
  open: (bankAccount: BankAccountModel) => Promise<BankAccountModel>
}
