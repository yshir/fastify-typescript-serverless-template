import dotenv from 'dotenv';

dotenv.config();

export const config = {
  app: {
    env: process.env['APP_ENV'] || 'development',
    port: +(process.env['APP_PORT'] || 3001),
  },
};
