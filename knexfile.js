// Update with your config settings.

module.exports = {
  development: {
    client: "postgresql",
    connection: {
      database: "omnistack11",
      user: "postgres",
      password: "postgres"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: "./src/database/migrations",
      tableName: "knex_migrations"
    },
    seeds: {
      directory: "./src/database/seeds"
    }
  },

  test: {
    client: "postgresql",
    connection: {
      database: "omnistack11test",
      user: "postgres",
      password: "postgres"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: "./src/database/migrations",
      tableName: "knex_migrations"
    },
    seeds: {
      directory: "./src/database/seeds"
    }
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },

  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }
};
