import { resolve } from 'path';
import { config } from 'dotenv';
import { Sequelize } from 'sequelize-typescript';

config({ path: resolve(process.cwd(), '.env') });


export const db = new Sequelize({
  dialect: 'mysql',
  database: process.env.DB_DATABASE,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
  define: {
    charset: 'utf8',
    collate: 'utf8_general_ci',
  },
  logging: console.log,
  models: [
    resolve(process.cwd(), 'src', 'database', 'models'),
  ],
});

