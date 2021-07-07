import { HttpResponse, HttpRequest, Controller } from './open-account-controller-protocols'
// import { serverError } from '@/user-interface/common/helpers/http/http-helper'
import { OpenAccount } from '@/core/components/bank-account/usecases/open-account/open-account'

export class OpenAccountController implements Controller {
  constructor (
    private readonly openAccount: OpenAccount
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    /*
    try {
      const a = null
      return a
    } catch (error) {
      return serverError(error)
    }
    */
    /* {
      body: { userId: bankAccount },
      statusCode: 400
    } */

    const { userId } = httpRequest.body
    await this.openAccount.open(userId)
    // const bankAccount = await this.openAccount.open(userId)
    return null
  }
}
