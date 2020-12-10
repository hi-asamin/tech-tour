import 'reflect-metadata';
import { Connection, createConnection } from 'typeorm';
// import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

// import config from '../config';


export class SqlConnection {
  public static async getConnection(): Promise<Connection> {
    const connection: Connection = await createConnection();
    return connection;
  }
}

// export async function newSqlHandler(): Promise<Connection> {
//   const connection: Connection = await createConnection(connectionOptions);
//   return connection;
// }