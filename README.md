# fastify-typescript-serverless-template

## Description

This repository is a template of fastify with typescript.

- Fastify: https://www.fastify.io
- TypeScript: https://www.typescriptlang.org

Deployment to AWS Lambda using a serverless framework.

- AWS Lambda: https://aws.amazon.com/lambda
- Serverless Framework: https://www.serverless.com

## Installation

```bash
## Install dependencies
$ npm i

## Make .env file
$ cp .env.sample .env
```

## Running the app

```bash
$ npm run dev
```

## Running the test

```bash
$ npm test
```

## Deployment

Merged into master, it will be automatically deployed to AWS Lambda by GitHub actions (requires to set up GitHub secrets)
