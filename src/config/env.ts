import dotenv from 'dotenv';
import fs from 'fs';
import logger from '../util/logger';
import schema from './schema';

export type EnvConfig = {
  DB_HOST: string;
  DB_PORT: string;
  DB_NAME: string;
  DB_USER: string;
  DB_PASSWORD: string;
  NODE_ENV: string;
  PORT: string;
};

if (fs.existsSync('.env')) {
  logger.debug('Using .env file to supply config environment variables');
  dotenv.config({ path: '.env' });
} else {
  logger.debug('Using .env.dev file to supply config environment variables');
  dotenv.config({ path: '.env.dev' });
}

schema.validateSync(process.env);

export default (process.env as unknown) as EnvConfig;
