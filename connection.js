const { Pool } = require("pg");
const pool = require('./connection');

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "rootroot",
  database: "employee_tracker_db",
  port: 5432, // Default PostgreSQL port
});

module.exports = pool;



class DB {
  constructor() {}

  async query(sql, args = []) {
    const client = await pool.connect();
    try {
      const result = await client.query(sql, args);
      return result;
    } finally {
      client.release();
    }
  }

}