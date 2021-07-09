import { HttpResponse, HttpRequest, Controller, AddAccount, Authentication } from './signup-controller-protocols'
import { badRequest, serverError, ok, forbidden } from '@/user-interface/common/helpers/http-helper'
import { Validation } from '@/user-interface/common/interfaces/validation'
import { EmailInUseError } from '@/user-interface/common/errors'

export class SignUpController implements Controller {
  constructor (
    private readonly addAccount: AddAccount,
    private readonly validation: Validation,
    private readonly authentication: Authentication
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body)
      if (error) {
        return badRequest(error)
      }
      const { name, cpf, email, password } = httpRequest.body
      const account = await this.addAccount.add({
        name,
        cpf,
        email,
        password
      })
      if (!account) {
        return forbidden(new EmailInUseError())
      }
      const accessToken = await this.authentication.auth({
        email,
        password
      })
      return ok({ accessToken })
    } catch (error) {
      return serverError(error)
    }
  }
}
