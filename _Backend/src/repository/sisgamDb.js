require('dotenv').config({ path: 'config.env' });
const mysqlx = require('@mysql/xdevapi');
const dbClient = function () { };

async function getConnection() {
    const config = {
        password: process.env.SISGAMDB_MYSQL_PASSWORD,
        user: process.env.SISGAMDB_MYSQL_USER,
        host: process.env.SISGAMDB_MYSQL_HOST,
        port: parseInt(process.env.SISGAMDB_MYSQL_PORT),
        schema: process.env.SISGAMDB_MYSQL_SCHEMA   
    }     
    return mysqlx.getSession(config);
}

dbClient.getConnection = getConnection;
module.exports = dbClient;
