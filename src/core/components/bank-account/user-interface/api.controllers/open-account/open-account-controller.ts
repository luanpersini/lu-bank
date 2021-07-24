import { HttpResponse, HttpRequest, Controller, OpenAccount, AssociatedAccountError } from './open-account-controller-protocols'
import { forbidden, ok, serverError } from '@/user-interface/common/helpers/http-helper'

export class OpenAccountController implements Controller {
  constructor (
    private readonly openAccount: OpenAccount
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { userId } = httpRequest
      const bankAccount = await this.openAccount.open(userId)
      if (!bankAccount) {
        return forbidden(new AssociatedAccountError())
      }
      return ok(bankAccount)
    } catch (error) {
      return serverError(error)
    }
  }
}
