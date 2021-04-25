import awsLambdaFastify from 'aws-lambda-fastify';

import { buildFastify } from '@src/app';
import { config } from '@src/config';

const fastify = buildFastify({
  logger: {
    level: config.app.logger.level,
  },
});
const proxy = awsLambdaFastify(fastify);

export const handler = proxy;
