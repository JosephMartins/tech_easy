
module.exports = {
  type: "postgres",
  url: process.env.DATABASE_URL,
  synchronize: false,
  logging: true,
  ssl: true,
  extra: {
    ssl: {
      rejectUnauthorized: false
    },
  entities: [
    "./dist/modules/**/infra/typeorm/entities/*.js"
  ],
  migrations: [
    "./dist/shared/infra/typeorm/migrations/*.js"
  ],
  cli: {
  migrationsDir: "./src/shared/infra/typeorm/migrations"
  }
}
