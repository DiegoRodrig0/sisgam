const sisgamDb = require('../repository/sisgam_Db');
const Sisgam_Map_Model = function () { };

Sisgam_Map_Model.getUsersByUnity = async function (id_UnidadeMapa) {
    const connection = await sisgamDb.getConnection();
    const query = connection.sql(
        `SELECT TB_MAPA.ID_USERMAPA, TB_USER.USER_EMSERF ` +
        `FROM TBMAPA_EMSERF AS TB_MAPA ` +
        `LEFT JOIN TBUSERS_EMSERF AS TB_USER ` +
        `ON TB_MAPA.ID_USERMAPA  = TB_USER.ID_EMAIL ` +
        `WHERE ID_UNIDADEMAPA = ? `).bind([id_UnidadeMapa]);
    let data = [];
    try {
        data = await query.execute();

    } catch (ex) {
        if (connection)
            connection.close();
        throw ex;
    }
    connection.close();
    return data.fetchAll();
}

module.exports = Sisgam_Map_Model;