import express from 'express';
import "reflect-metadata";
import { createConnection } from "typeorm";
import { json, urlencoded } from 'body-parser';
import helmet from 'helmet';
import cors from 'cors';

// import config from './config';
// import { connectionOptions, SqlConnection } from './infrastructure/sqlhandler';
import * as router from './router/index';

async function main() {
  // if (!config.port) {
  //   console.log('app port is undefined');
  //   process.exit(1);
  // }
  // createConnection().then(() => {

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
    // const sqlConnection: SqlConnection = new SqlConnection();
    // await sqlConnection.newSqlHandler();
    /**
     * Create connection to DB using configuration provided in 
     * appconfig file.
     */
    // createConnection(connectionOptions).then(async connection => {
    //   console.log("Connected to DB");
  
    // }).catch(error => console.log("TypeORM connection error: ", error));
    router.initRoutes(app);
  // }).catch(error => console.error(error));
}

main();