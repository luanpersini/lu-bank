import { LogControllerDecorator } from '@/user-interface/common/log/log-controller-decorator'
import { Controller } from '@/user-interface/common/interfaces'
import { LogMongoRepository } from './log-mongo-repository'

export const makeLogControllerDecorator = (controller: Controller): Controller => {
  const logMongoRepository = new LogMongoRepository()
  return new LogControllerDecorator(controller, logMongoRepository)
}
