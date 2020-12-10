import express from 'express';
import "reflect-metadata";
import { json, urlencoded } from 'body-parser';
import helmet from 'helmet';
import cors from 'cors';

import * as router from './infrastructure/router/index';

async function main() {
  const app = express();
  
  // セキュリティ対応
  app.use(helmet());
  app.use(cors());
  // bodyがundefinedにならないように
  app.use(urlencoded({ extended: false }));
  app.use(json());
  
  app.listen(
    3000,
    (): void => {
      console.log('listening on port 3000');
    }
  );
  router.initRoutes(app);
}

main();