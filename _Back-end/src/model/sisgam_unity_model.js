const sisgamDb = require('../repository/sisgamDb');
const Unity = function () { };

Unity.getAllUnits = async function () {
    const connection = await sisgamDb.getConnection();
    const query = connection.sql('SELECT id, nome, site FROM tb_unity_sisgam ORDER BY site');

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

module.exports = Unity;