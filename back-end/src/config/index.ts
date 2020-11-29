import * as dotenv from 'dotenv';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();
if (!envFound) {
  // Throw generic error
  throw new Error("Couldn't find .env file");
}

export default {
  /**
   *  Application port.
   */
  port: process.env.PORT,

  /**
   * JWT Secret
   */
  jwtSecret: process.env.JWT_SECRET,

  /**
   * Mysql connection options.
   */
  database: {
    type: process.env.TYPEORM_CONNECTION,
    /**
     * Database host.
     */
    host: process.env.TYPEORM_HOST,
    /**
     * Database host port.
     */
    // tslint:disable-next-line: radix
    port: Number(process.env.TYPEORM_PORT),
    /**
     * Database username.
     */
    username: process.env.TYPEORM_USERNAME,
    /**
     * Database password.
     */
    password: process.env.TYPEORM_PASSWORD,
    /**
     * Database name to connect to.
     */
    database: process.env.TYPEORM_DATABASE,
  },
};