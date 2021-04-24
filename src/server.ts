import * as dotenv from 'dotenv';

import { createApp } from '@src/app';

dotenv.config();

const port = process.env.APP_PORT || '8080';
const server = createApp();

server.listen(port, (err, addr) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`🚀 Server listening at ${addr}`);
});
