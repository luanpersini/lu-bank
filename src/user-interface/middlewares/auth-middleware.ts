import { Middleware, HttpRequest, HttpResponse, LoadAccountByToken } from './auth-middleware-protocols'
import { forbidden, ok, serverError } from '@/user-interface/common/helpers/http/http-helper'
import { AccessDeniedError } from '@/user-interface/common/errors'

export class AuthMiddleware implements Middleware {
  constructor (
    private readonly loadAccountByToken: LoadAccountByToken
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const accessToken = httpRequest.headers?.['x-access-token']
      if (accessToken) {
        const account = await this.loadAccountByToken.load(accessToken)
        if (account) {
          return ok({ userId: account.id })
        }
      }
      return forbidden(new AccessDeniedError())
    } catch (error) {
      return serverError(error)
    }
  }
}
