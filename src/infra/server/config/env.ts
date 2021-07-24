export default {
  mongoUrl: process.env.MONGO_URL || 'mongodb://localhost:27017/lu-bank',
  mongoDevUrl: 'mongodb://localhost:27017/lu-bank-dev',
  port: process.env.PORT || 5050,
  jwtSecret: process.env.JWT_SECRET || 'tj67O==5H',
  postgreUrl: process.env.POSTGRE_URL || {
    host: 'localhost',
    database: 'lu-bank',
    user: 'postgres',
    password: '123456',
    port: 5432
  },
  postgreDevUrl: {
    host: 'localhost',
    database: 'lu-bank-dev',
    user: 'postgres',
    password: '123456',
    port: 5432
  }
}
