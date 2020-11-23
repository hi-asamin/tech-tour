import express from 'express';
import dotenv from 'dotenv';
import { json, urlencoded } from 'body-parser';

import * as router from './router/index';

async function main() {
  dotenv.config();
  if (!process.env.APP_PORT) {
    console.log('app port is undefined');
    process.exit();
  }
  
  const app = express();
  
  // bodyがundefinedにならないように
  app.use(urlencoded({ extended: false }));
  app.use(json());
  
  app.listen(
    process.env.APP_PORT,
    (): void => {
      console.log('listening on port 3000');
    }
  );
  router.initRoutes(app);
}

main();