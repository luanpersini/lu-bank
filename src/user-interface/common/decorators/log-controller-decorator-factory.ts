import { LogControllerDecorator } from '@/user-interface/common/decorators/log-controller-decorator'
import { LogMongoRepository } from '@/infra/log/log-mongo-repository'
import { Controller } from '@/user-interface/common/interfaces'

export const makeLogControllerDecorator = (controller: Controller): Controller => {
  const logMongoRepository = new LogMongoRepository()
  return new LogControllerDecorator(controller, logMongoRepository)
}
