import { Client } from 'pg';

const { DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASSWORD } = process.env;
const client = new Client({
  user: DB_USER,
  host: DB_HOST,
  database: DB_NAME,
  password: DB_PASSWORD,
  port: +(DB_PORT || '3000'),
});

export default client;

export async function initDb() {
  await client.connect();
}
