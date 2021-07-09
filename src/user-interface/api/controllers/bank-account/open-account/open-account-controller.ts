import { HttpResponse, HttpRequest, Controller } from './open-account-controller-protocols'
// import { serverError } from '@/user-interface/common/helpers/http/http-helper'
// import { OpenAccount } from '@/core/components/bank-account/usecases/open-account/open-account'
// import { serverError } from '@/user-interface/common/helpers/http/http-helper'
// import { LoadAccountByToken } from '@/core/components/user-account/usecases/load-account-by-token/load-account-by-token'

// 2. - [ ] **Valida** se já existe uma conta bancária com o userId fornecido
// 3. - [ ] Cria uma **conta bancária** para o usuário logado
// 4. - [ ] Retorna **200** com os dados da conta bancária criada

export class OpenAccountController implements Controller {
/*
  constructor (
    private readonly openAccount: OpenAccount,
    private readonly loadAccountByToken: LoadAccountByToken
  ) {}
*/
  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    // const { userId } = httpRequest
    return null
  }
}

/*
try {
  const { userId } = httpRequest.body
  const userAccount = await this.loadAccountByToken.loadByToken(accessToken)
  await this.openAccount.open(userId)
  return null
} catch (error) {
  return serverError(error)
}
const bankAccount = await this.openAccount.open(userId)
}
*/
