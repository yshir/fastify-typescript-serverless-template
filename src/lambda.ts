import awsLambdaFastify from 'aws-lambda-fastify';

import { createApp } from '@src/app';

const app = createApp();
const proxy = awsLambdaFastify(app);

export const handler = proxy;
