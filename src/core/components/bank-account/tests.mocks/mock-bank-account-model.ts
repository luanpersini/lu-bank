import { BankAccountModel } from '@/core/components/bank-account/domain/bank-account'
import { makeAccountNumber } from '@/user-interface/common/helpers/utils-helper'
import { agencyParams } from '../domain/agency'

export const mockAgency = (): agencyParams => ({
  number: '0000-1',
  name: 'Digital',
  address: 'Digital'
})

export const mockBankAccountModel = (): BankAccountModel => ({
  userId: 'any_userId',
  account: makeAccountNumber(),
  agency: mockAgency(),
  openedAt: new Date(),
  balance: 1000
})
// account: String(new Date().getTime()).substring(String(new Date().getTime()).length - 8, String(new Date().getTime()).length)
