import { agencyParams } from './agency'

export type BankAccountModel = {
  userId: string
  account: string
  agency: agencyParams
  openedAt: Date
  balance: number
}
