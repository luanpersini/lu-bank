import { HttpResponse, HttpRequest, Controller } from './open-account-controller-protocols'
import { OpenAccount } from '@/core/components/bank-account/usecases/open-account/open-account'
import { forbidden, serverError } from '@/user-interface/common/helpers/http-helper'
import { AssociatedAccountError } from '@/user-interface/common/errors/associated-account-error'

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
      return null
    } catch (error) {
      return serverError(error)
    }
  }
}
