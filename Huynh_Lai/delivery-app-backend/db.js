const {Pool} = require ('pg');
const pool = new Pool ({
    user: 'postgres',
    host: 'localhost',
    database:'delivery_app',
    password:'071005',
    port: 1800,
});

module.exports =pool;