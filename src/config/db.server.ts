require('dotenv').config();


module.exports = {
  development: {
    database: process.env.DB_DATABASE,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
    define: {
      charset: 'utf8',
      collate: 'utf8_general_ci',
    },
    dialectOptions: {
      timezone: 'Etc/GMT+3',
    },
    logging: console.log,
  },
  production: {
    database: process.env.DB_DATABASE,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
    define: {
      charset: 'utf8',
      collate: 'utf8_general_ci',
    },
    dialectOptions: {
      timezone: 'Etc/GMT+3',
    },
    logging: false,
  },
  test: {
    database: process.env.DB_DATABASE,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
    define: {
      charset: 'utf8',
      collate: 'utf8_general_ci',
    },
    dialectOptions: {
      timezone: 'Etc/GMT+3',
    },
    logging: false,
  },
};


