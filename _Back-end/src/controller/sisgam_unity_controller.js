const Sisgam_Unity = require('../model/sisgam_unity_model');

async function getAllUnits(req, res) {
    try {
        const response = await Sisgam_Unity.getAllUnits();
        res.status(200).send(response);
    }
    catch (ex) {
        res.status(500).send({ error: ex });
    }
}

exports.getAllUnits = getAllUnits;