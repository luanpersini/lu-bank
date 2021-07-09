import { HttpResponse, HttpRequest, Controller } from './open-account-controller-protocols'
import { OpenAccount } from '@/core/components/bank-account/usecases/open-account/open-account'
import { serverError } from '@/user-interface/common/helpers/http-helper'

export class OpenAccountController implements Controller {
  constructor (
    private readonly openAccount: OpenAccount
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { userId } = httpRequest
      await this.openAccount.open(userId)
      return null
    } catch (error) {
      return serverError(error)
    }
  }
}
// const bankAccount = await this.openAccount.open(userId)
