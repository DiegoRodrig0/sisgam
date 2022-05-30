const sisgam_Db = require('../repository/sisgamDb');
const UserEmserf = function () { };

UserEmserf.getUsersBySedeId = async function (sedeId) {
    const connection = await sisgam_Db.getConnection();
    const query = connection.sql(`SELECT tbrs.receiver_id, tbr.email FROM tbreceiver_sede AS tbrs ` +
        `LEFT JOIN tbindication_loses_receivers AS tbr ON tbrs.receiver_id  = tbr.id ` +
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

UserEmserf.getCountUsers = async function () {
    const connection = await sisgam_Db.getConnection();
    //console.log(connection);
    const query = connection.sql(
        'select id, nome, km_inicio, km_fim, Qtde from view_1 ' +
        'union ' +
        'select id, nome, km_inicio, km_fim, Qtde from view_2');
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

UserEmserf.getSedeDetails = async function (sedeId) {
    const connection = await sisgam_Db.getConnection();
    const query = connection.sql(
        'SELECT tbrs.receiver_id, tbr.email, tbrs.sede_id, tbs.nome ' +
        'FROM tbreceiver_sede AS tbrs LEFT JOIN tbindication_loses_receivers AS tbr ON tbrs.receiver_id = tbr.id ' +
        'left  join tbsede AS tbs ON tbrs.sede_id  = tbs.id ' +
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

UserEmserf.getUserDetails = async function (receiver_id) {
    const connection = await sisgam_Db.getConnection();
    const query = connection.sql(
        'SELECT tbrs.receiver_id, tbr.email, tbrs.sede_id, tbs.nome ' +
        'FROM tbreceiver_sede AS tbrs LEFT JOIN tbindication_loses_receivers AS tbr ' +
        'ON tbrs.receiver_id = tbr.id left  join tbsede AS tbs ' +
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

UserEmserf.deleteUsersBySede = async function (receivers_id, sede_id) {
    const connection = await sisgam_Db.getConnection();    
    const query = connection.sql(
    `DELETE FROM tbreceiver_sede WHERE receiver_id IN (${receivers_id.join(',')}) AND sede_id = ?`
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

UserEmserf.insertUsersBySede = async function (receiver_id, sede_id) {
    const connection = await mchDb.getConnection();
    const query = connection.sql(
    `INSERT INTO tbreceiver_sede (receiver_id, sede_id)
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
    return "✅ EMAIL VINCULADO COM SUCESSO!"; 
}

module.exports = UserEmserf;