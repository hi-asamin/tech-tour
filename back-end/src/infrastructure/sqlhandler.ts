import 'reflect-metadata';
import { Connection, createConnection } from 'typeorm';

export class SqlConnection {
  public static async getConnection(): Promise<Connection> {
    const connection: Connection = await createConnection();
    return connection;
  }
}