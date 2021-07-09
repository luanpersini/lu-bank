import { BankAccountModel } from '../domain/bank-account'

export type OpenBankAccountParams = Omit<BankAccountModel, 'openedAt'>

export interface OpenAccountRepository {
  open: (bankAccount: OpenBankAccountParams) => Promise<BankAccountModel>
}
