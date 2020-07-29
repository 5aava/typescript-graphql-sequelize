import { resolve } from 'path';
import { config } from 'dotenv';

config({ path: resolve(process.cwd(), '.env') });


export = {
  env: process.env.ENV,
  clientkey: process.env.CLIENTKEY,
  jwtkey: process.env.JWTKEY,
  logs: {
    type: process.env.LOGS_TYPE,
    path: process.env.LOGS_PATH,
  },
  server: {
    protocol: process.env.SERVER_PROTOCOL,
    host: process.env.SERVER_HOST,
    port: process.env.SERVER_PORT,
    domain: process.env.SERVER_DOMAIN,
  },
};
