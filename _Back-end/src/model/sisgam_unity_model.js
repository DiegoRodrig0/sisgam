const sisgamDb = require('../repository/sisgam_Db');
const Sisgam_Unity_Model = function () { };

Sisgam_Unity_Model.getAllUnits = async function () {
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

module.exports = Sisgam_Unity_Model;