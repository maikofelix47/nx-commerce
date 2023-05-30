import { TypeOrmModuleOptions } from '@nestjs/typeorm';

interface Config {
  port: number;
  database: TypeOrmModuleOptions;
  jwt: {
    secret: string;
    signOptions: { expiresIn: number };
  };
}
type dbType = 'mysql' | 'postgres' | 'mariadb';

export default (): Config => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    type: process.env.DATABASE_TYPE as dbType,
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT),
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    logging: false,
    retryAttempts: 2,
    autoLoadEntities: true,
    synchronize: true,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    signOptions: { expiresIn: parseInt(process.env.JWT_EXPIRES_IN) },
  },
});
;
