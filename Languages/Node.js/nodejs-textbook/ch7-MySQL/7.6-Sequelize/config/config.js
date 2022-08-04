require('dotenv').config();
const env = process.env;

const development = {
  username: env.DB_USERNAME,
  password: env.DB_PW,
  database: env.DB_NAME,
  host: '127.0.0.1',
  dialect: 'mysql'
};

const test = {
  username: 'root',
  password: null,
  database: 'database_test',
  host: '127.0.0.1',
  dialect: 'mysql'
};

const production = {
  username: 'root',
  password: null,
  database: 'database_production',
  host: '127.0.0.1',
  dialect: 'mysql'
};

module.exports = { development, production, test };