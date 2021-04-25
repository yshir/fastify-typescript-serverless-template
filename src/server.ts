import { buildFastify } from '@src/app';
import { config } from '@src/config';

const { port } = config.app;
const fastify = buildFastify({
  logger: {
    level: config.app.logger.level,
  },
});

fastify.listen(port, (err, addr) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`🚀 Server listening at ${addr}/healthcheck`);
});
