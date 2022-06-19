const sisgamDb = require('../repository/sisgamDb');
const Map = function () { };

Map.getUsersByUnityId = async function (sedeId) {
    const connection = await sisgamDb.getConnection();
    const query = connection.sql(`SELECT tbrs.receiver_id, tbr.email FROM tb_map_sisgam AS tbrs ` +
        `LEFT JOIN tb_user_sisgam AS tbr ON tbrs.receiver_id  = tbr.id ` +
        `WHERE sede_id = ? `).bind([sedeId]);
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

Map.getCountUsers = async function () {
    const connection = await sisgamDb.getConnection();
    const query = connection.sql(
        '(SELECT s.id AS id,s.nome AS nome,s.site AS site,s.ref AS ref, COUNT(u.receiver_id) AS Qtde, 1 AS subset ' +
        'FROM tb_map_sisgam u ' +
        'JOIN tb_unity_sisgam s ON u.sede_id = s.id ' +
        'WHERE (s.id NOT in (9,10)) ' +
        'GROUP BY s.nome) ' +
        'UNION ' +
        '(SELECT s.id AS id, s.nome AS nome, s.site AS site, s.ref AS ref, COUNT(u.receiver_id) AS Qtde, 2 ' +
        'FROM tb_map_sisgam u ' +
        'JOIN tb_unity_sisgam s ON u.sede_id = s.id ' +
        'WHERE(s.id in (9, 10)) ' +
        'GROUP BY s.nome) ' +
        'ORDER BY subset, site;'
    );
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

Map.getUnityDetails = async function (sedeId) {
    const connection = await sisgamDb.getConnection();
    const query = connection.sql(
        'SELECT tbrs.receiver_id, tbr.email, tbrs.sede_id, tbs.nome ' +
        'FROM tb_map_sisgam AS tbrs LEFT JOIN tb_user_sisgam AS tbr ON tbrs.receiver_id = tbr.id ' +
        'left  join tb_unity_sisgam AS tbs ON tbrs.sede_id  = tbs.id ' +
        'WHERE sede_id = ? ORDER BY tbr.email').bind([sedeId]);
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

Map.getUserDetails = async function (receiver_id) {
    const connection = await sisgamDb.getConnection();
    const query = connection.sql(
        'SELECT tbrs.receiver_id, tbr.email, tbrs.sede_id, tbs.nome ' +
        'FROM tb_map_sisgam AS tbrs LEFT JOIN tb_user_sisgam AS tbr ' +
        'ON tbrs.receiver_id = tbr.id left  join tb_unity_sisgam AS tbs ' +
        'ON tbrs.sede_id  = tbs.id WHERE receiver_id = ?'
    ).bind([receiver_id]);
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

Map.deleteUsersByUnity = async function (receivers_id, sede_id) {
    const connection = await sisgamDb.getConnection();
    const query = connection.sql(
        `DELETE FROM tb_map_sisgam WHERE receiver_id IN (${receivers_id.join(',')}) AND sede_id = ?`
    ).bind([sede_id]);
    let data = [];
    try {
        data = await query.execute();
    } catch (ex) {
        if (connection)
            connection.close();
        throw ex;
    }
    connection.close();
    return data.getAffectedItemsCount();
}

Map.insertUserByUnity = async function (receiver_id, sede_id) {
    const connection = await sisgamDb.getConnection();
    const query = connection.sql(
        `INSERT INTO tb_map_sisgam (receiver_id, sede_id)
    VALUES (?,?)`).bind([receiver_id, sede_id]);
    let data = [];
    try {
        data = await query.execute();
    } catch (ex) {
        if (connection)
            connection.close();
        throw ex;
    }
    connection.close();
    return true;
}

Map.getGeneralList = async function () {
    const connection = await sisgamDb.getConnection();
    const query = connection.sql(
        'SELECT tbrs.id, tbr.email, tbs.nome '+
        'FROM tb_map_sisgam AS tbrs LEFT JOIN tb_user_sisgam AS tbr ON tbrs.receiver_id = tbr.id ' +
        'left  join tb_unity_sisgam AS tbs ON tbrs.sede_id  = tbs.id ' +
        'ORDER BY tbrs.id '
        );
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

module.exports = Map;