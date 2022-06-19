require('dotenv').config({ path: 'config.env' });
const mysqlx = require('@mysql/xdevapi');
const dbClient = function () { };

async function getConnection() {
    const config = {
        password: process.env.SISGAM_MYSQL_DB_PASSWORD,
        user: process.env.SISGAM_MYSQL_DB_USER,
        host: process.env.SISGAM_MYSQL_DB_HOST,
        port: parseInt(process.env.SISGAM_MYSQL_DB_PORT),
        schema: process.env.SISGAM_MYSQL_DB_SCHEMA
    }     
    return mysqlx.getSession(config);
}

dbClient.getConnection = getConnection;
module.exports = dbClient;