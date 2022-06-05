const sisgamDb = require('../repository/sisgam_Db');
const Sisgam_User_Model = function () { };

Sisgam_User_Model.getAllUsers = async function () {
    const connection = await sisgamDb.getConnection();
    const query = connection.sql('SELECT * FROM tbusers_emserf');

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

module.exports = Sisgam_User_Model;