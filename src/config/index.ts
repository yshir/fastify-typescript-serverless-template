import dotenv from 'dotenv';

dotenv.config();

export const config = {
  app: {
    env: process.env['APP_ENV'] || 'development',
    port: +(process.env['APP_PORT'] || 3001),
    logger: {
      level: process.env['APP_LOGGER_LEVEL'] || 'trace',
    },
    cors: process.env['APP_CORS'] ? new RegExp(process.env['APP_CORS']) : false,
  },
};
