import pg from 'pg';
import 'dotenv/config'
const { Pool } = pg;

const { DB_USER, DB_PASSWORD, DB_HOST, DB_DATABASE, DB_PORT } = process.env;

const config = {
    user: DB_USER,
    password: DB_PASSWORD,
    host: DB_HOST,
    database: DB_DATABASE,
    port: DB_PORT,
    allowExitOnIdle: true
}



export const pool = new Pool(config);