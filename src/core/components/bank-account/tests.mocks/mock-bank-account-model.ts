import { BankAccountModel } from '@/core/components/bank-account/domain/bank-account'

export const mockBankAccountModel = (): BankAccountModel => ({
  userId: 'any_userId',
  account: String(new Date().getTime()).substring(String(new Date().getTime()).length - 8, String(new Date().getTime()).length),
  agency: {
    number: '0000-1',
    name: 'Digital',
    address: 'Digital'
  },
  openedAt: new Date(),
  balance: 1000
})
