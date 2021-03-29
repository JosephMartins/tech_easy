

const devConfig = {
  type: "postgres",
  url: process.env.DATABASE_URL,
  entities: [
    "./src/modules/**/infra/typeorm/entities/*.ts"
  ],
  migrations: [
    "./src/shared/infra/typeorm/migrations/*.ts"
  ],
  cli: {
  migrationsDir: "./src/shared/infra/typeorm/migrations"
  }
}


const prodConfig = {
  type: "postgres",
  url: process.env.DATABASE_URL,
  ssl: true,
  extra: {
    ssl: {
      rejectUnauthorized: false
    },
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

module.exports = process.env.NODE_ENV === 'development' ? devConfig : prodConfig;
