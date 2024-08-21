import mariadb from "mariadb"

const poolParams = {
    host:process.env.MARIADB_HOST,
    user:process.env.MARIADB_USER,
    password: process.env.MARIADB_PASSWORD,
    database: process.env.MARIADB_DATABASE,
}

const pool = mariadb.createPool(poolParams);

export default pool;