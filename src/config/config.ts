import dotenv from 'dotenv';
import fs from 'fs';
import logger from '../util/logger';

if (fs.existsSync('.env')) {
  logger.debug('Using .env file to supply config environment variables');
  dotenv.config({ path: '.env' });
} else {
  logger.debug('Using .env.dev file to supply config environment variables');
  dotenv.config({ path: '.env.dev' });
}

export const ENVIRONMENT = process.env.NODE_ENV;
const prod = ENVIRONMENT === 'production'; // Anything else is treated as 'dev'

const { DB_HOST } = process.env;

if (!DB_HOST) {
  logger.error('No database host specified. Set DB_HOST environment variable.');
  process.exit(1);
}
