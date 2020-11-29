import 'reflect-metadata';
import { Connection, createConnection } from 'typeorm';
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

// import config from '../config';

export const connectionOptions: MysqlConnectionOptions = {
  type: 'mysql',
  host: 'rdb',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'app_db',
  entities: [ 'src/entities/**/*.ts' ],
  synchronize: true,
  logging: true,
}

export class SqlConnection {
  public async newSqlHandler(): Promise<Connection> {
    const connection: Connection = await createConnection(connectionOptions);
    return connection;
  }
}

// export async function newSqlHandler(): Promise<Connection> {
//   const connection: Connection = await createConnection(connectionOptions);
//   return connection;
// }