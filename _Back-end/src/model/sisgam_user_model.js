const sisgamDb = require('../repository/sisgamDb');
const User = function () { };

User.getAllUsers = async function () {
    const connection = await sisgamDb.getConnection();
    const query = connection.sql('SELECT * from tb_user_sisgam');

    let data = [];
    try {
        data = await query.execute();
    }
    catch (ex) {
        if (connection)
            connection.close();
        throw ex;
    }
    connection.close();
    return data.fetchAll();
}

User.insertUsers = async function (email) {
    const connection = await sisgamDb.getConnection();
    const query = connection.sql(
        `INSERT INTO tb_user_sisgam (email)
        VALUES (?)`
    ).bind([email]);
    let data = [];
    try {
        data = await query.execute();
    } catch (ex) {
        if (connection)
            connection.close();
        throw ex;
    }
    connection.close();
    return data.getAutoIncrementValue();
}

User.findIdByEmail = async function (email) {
    const connection = await sisgamDb.getConnection();
    const query = connection.sql(
        `SELECT id FROM tb_user_sisgam
       WHERE email = ?`
    ).bind([email]);
    let data = [];
    let id = -1;
    try {
        data = await query.execute();
        let queryResponse = data.fetchOne();
        if (queryResponse && queryResponse.length > 0){
            id = queryResponse[0];
        }
    } catch (ex) {
        if (connection)
            connection.close();
        throw ex;
    }
    connection.close();
    return id;
}

module.exports = User;