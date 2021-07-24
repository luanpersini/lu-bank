import { MongoHelper } from '../../../../infra/persistence/db/helpers/mongo-helper'
import { LogErrorRepository } from '@/user-interface/common/log/log-error-repository'

export class LogMongoRepository implements LogErrorRepository {
  async logError (stack: string): Promise<void> {
    const errorCollection = await MongoHelper.getCollection('errors')
    await errorCollection.insertOne({
      stack,
      date: new Date()
    })
  }
}
