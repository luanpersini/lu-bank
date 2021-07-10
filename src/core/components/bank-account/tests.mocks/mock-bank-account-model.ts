import { BankAccountModel } from '@/core/components/bank-account/domain/bank-account'
import { OpenBankAccountParams } from '../usecases/open-account/open-account-usecase-protocols'

export const mockBankAccountModel = (): BankAccountModel => ({
  userId: 'any_userId',
  account: 'any_account',
  agency: {
    number: 'any_number',
    name: 'any_name',
    address: 'any_address'
  },
  openedAt: new Date('2021-07-09T20:22:42.844Z'),
  balance: 1000
})

export const mockOpenBankAccountParams = (): OpenBankAccountParams => ({
  userId: 'any_userId',
  account: 'any_account',
  agency: {
    number: 'any_number',
    name: 'any_name',
    address: 'any_address'
  },
  balance: 1000
})
