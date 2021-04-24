import { createApp } from '@src/app';

const server = createApp();

server.listen(8080, (err, addr) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`🚀 Server listening at ${addr}`);
});
