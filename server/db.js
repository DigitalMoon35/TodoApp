const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "Fresh3535!",
    host: "localhost",
    port: 5432,
    database: "perntodo"
})

module.exports = pool;