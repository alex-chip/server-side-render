import dotenv from 'dotenv';

dotenv.config();

const { PORT, ENV } = process.env;

export default {
  port: process.env.port || PORT,
  env: ENV,
};
