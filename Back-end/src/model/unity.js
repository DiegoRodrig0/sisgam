const sisgamDb = require('../repository/sisgamDb');
const Unity = function () { };

Unity.getAllUnits = async function () {
    const connection = await sisgamDb.getConnection();
    const query = connection.sql('SELECT unidade_emserf FROM tbunidades_emserf');

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