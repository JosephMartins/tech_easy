
module.exports = {
  type: "postgres",
  url: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: true
 },
  entities: [
    "./dist/modules/**/infra/typeorm/entities/*.js"
  ],
  migrations: [
    "./dist/shared/infra/typeorm/migrations/*.js"
  ],
  cli: {
  migrationsDir: "./dist/shared/infra/typeorm/migrations"
  }
}
