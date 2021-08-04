export default {
  mongoUrl: process.env.MONGO_URL || 'mongodb://localhost:27017/lu-bank',
  port: process.env.PORT || 5051,
  jwtSecret: process.env.JWT_SECRET || 'tj67O==5H',
  postgreUrl: process.env.POSTGRE_URL || {
    host: 'localhost',
    database: 'lu-bank',
    user: 'postgres',
    password: '123456',
    port: 5432
  }
}
