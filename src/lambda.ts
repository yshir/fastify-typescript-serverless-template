import awsLambdaFastify from 'aws-lambda-fastify';

import { buildFastify } from '@src/app';

const fastify = buildFastify();
const proxy = awsLambdaFastify(fastify);

export const handler = proxy;
