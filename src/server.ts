import { createApp } from '@src/app';
import { config } from '@src/config';

const { port } = config.app;
const server = createApp();

server.listen(port, (err, addr) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`🚀 Server listening at ${addr}/ping`);
});
