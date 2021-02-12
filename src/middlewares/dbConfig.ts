import mysql from "promise-mysql";
import config from "config";
const db = async () => {
  const pool = await mysql.createPool({
    connectionLimit: 10,
    host: "sql307.epizy.com", //"sql7.freemysqlhosting.net",
    port: 3306,
    user: "epiz_27917454", //config.get("db_username"),
    password: "RAxZHjnAJlK", //config.get("db_password"),
    database: "epiz_27917454_covid19", //config.get("db_username"),
  });
  return await pool.getConnection();
};

export default db;
