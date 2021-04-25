/* eslint-disable @typescript-eslint/no-var-requires */
import { FastifyPluginCallback } from 'fastify';
import fs from 'fs';
import path from 'path';

const routes: FastifyPluginCallback = (fastify, _, next) => {
  fs.readdirSync(__dirname, { withFileTypes: true }).forEach(dirent => {
    if (!dirent.isFile()) {
      const dirname = dirent.name;
      fastify.register(require(`./${dirname}`), { prefix: `/${dirname}` });
    } else if (path.extname(dirent.name) === '.ts' && dirent.name !== 'index.ts') {
      const basename = path.basename(dirent.name, '.ts');
      fastify.register(require(`./${basename}`), { prefix: `/${basename}` });
    }
  });
  next();
};

export default routes;
