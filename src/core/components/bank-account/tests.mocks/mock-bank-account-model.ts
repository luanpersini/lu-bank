import { BankAccountModel } from '@/core/components/bank-account/domain/bank-account'

export const mockBankAccountModel = (): BankAccountModel => ({
  userId: 'any_userId',
  account: 'any_account',
  agency: {
    number: 'any_number',
    name: 'any_name',
    address: 'any_address'
  },
  openedAt: new Date(),
  balance: 1000
})
