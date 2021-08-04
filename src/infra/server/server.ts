import 'module-alias/register'
import env from './config/env'
import { MongoHelper } from '@/infra/persistence/db/helpers/mongo-helper'

// async function startServer (): Promise<void> {
//   console.log(process.env.NODE_ENV)
//   const app = (await import('./config/app')).default
//   app.listen(env.port, () => console.log(`Server running at http://localhost:${env.port}`))
//   await MongoHelper.connect(env.mongoUrl)
// }
// startServer().then().catch(e => console.log(e))

MongoHelper.connect(env.mongoUrl)
  .then(async () => {
    const app = (await import('./config/app')).default
    app.listen(env.port, () => console.log(`Server running at http://localhost:${env.port}`))
  })
  .catch(console.error)
