import mysql from "promise-mysql";
import config from "config";
const db = async () => {
  const pool = await mysql.createPool({
    connectionLimit: 10,
    host: "sql11.freemysqlhosting.net",
    port: 3306,
    user:"sql11392622",
    password: "tq7tpurzjS",
    database: "sql11392622",
  });
  return await pool.getConnection();
};

export default db;
