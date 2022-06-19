const User = require('../model/sisgam_map_model');
const Unity = require('../model/sisgam_unity_model');

async function getUsersByUnity(req, res) {
    if (req.body && req.body.sedeId) {
        try {
            let sedeId = parseInt(req.body.sedeId);
            if (!isNaN(sedeId)) {
                const response = await User.getUsersByUnityId(sedeId);
                res.status(200).send(response);
            }
            else {
                res.status(500).send({ error: 'A propriedade sedeId precisa ser um numero' });
            }
        }
        catch (ex) {
            res.status(500).send({ error: ex });
        }
    }
    else {
        res.status(500).send({ error: 'Você não definiu a propriedade sedeId' });
    }
}

async function getUnityDetails(req, res) {
    if (req.body && req.body.sedeId) {
        try {
            let sedeId = parseInt(req.body.sedeId);
            if (!isNaN(sedeId)) {
                const response = await User.getUnityDetails(sedeId);
                res.status(200).send(response);
            }
            else {
                res.status(500).send({ error: 'A propriedade sedeId precisa ser um número' });
            }
        }
        catch (ex) {
            res.status(500).send({ error: ex });
        }
    }
    else {
        res.status(500).send({ error: 'Você não definiu a propriedade sedeId' });
    }
}

async function getUserDetails(req, res) {
    if (req.body && req.body.receiver_id) {
        try {
            let receiver_id = parseInt(req.body.receiver_id);
            if (!isNaN(receiver_id)) {
                const response = await User.getUserDetails(receiver_id);
                res.status(200).send(response);
            }
            else {
                res.status(500).send({ error: 'The property id must be a number! in getUserDetails' });
            }
        }
        catch (ex) {
            res.status(500).send({ error: ex });
        }
    }
    else {
        res.status(500).send({ error: 'You must define the property id! in getUserDetails' });
    }
}

async function getCountUsers(req, res) {
    try {
        const response = await User.getCountUsers();
        res.status(200).send(response);
    }
    catch (ex) {
        res.status(500).send({ error: ex });
    }
}

async function deleteUsersByUnity(req, res) {
    if (req.body && req.body.receivers_id && req.body.sede_id) {
        try {            
            let receivers_id = req.body.receivers_id;
            let sede_id = parseInt(req.body.sede_id);
            if (!isNaN(sede_id) && receivers_id && receivers_id.length > 0) {                
                const response = await User.deleteUsersByUnity(receivers_id, sede_id);
                if (response > 0) {
                    res.status(200).send("User(s) deletion performed successfully!");
                }
                else {
                    res.status(500).send("There is no user that corresponds to the required parameters!")
                }
            }
            else {
                res.status(500).send({ error: 'The properties (sedeId and receivers_id) must be of type number!' });
            }
        }
        catch (ex) {
            res.status(500).send({ error: ex });
        }
    }
    else {
        res.status(500).send({ error: 'You must set the (sede_id and/or receivers_id) properties' });
    }
}

async function insertUserByUnity(req, res) {
    if (req.body && req.body.receiver_id && req.body.sede_id) {
        try {
            let receiver_id = parseInt(req.body.receiver_id);
            let sede_id = parseInt(req.body.sede_id);
            if (!isNaN(sede_id) && !isNaN(receiver_id)) {                
                const response = await User.insertUserByUnity(receiver_id, sede_id);
                res.status(200).send(response);
                console.log("✅ Email vinculado com sucesso!");
            }
            else {
                res.status(500).send({ error: 'The properties (sedeId and/or receiver_id) must be of type number!' });
            }
        }
        catch (ex) {
            res.status(500).send({ error: ex });
        }
    }
    else {
        res.status(500).send({ error: 'You must set the (sede_id and/or receivers_id) properties.' });
    }
}

async function getAllUnits(req, res) {
    try {
        const response = await Unity.getAllUnits();
        res.status(200).send(response);
    }
    catch (ex) {
        res.status(500).send({ error: ex });
    }
}

exports.insertUserByUnity = insertUserByUnity;
exports.deleteUsersByUnity = deleteUsersByUnity;
exports.getUserDetails = getUserDetails;
exports.getUnityDetails = getUnityDetails;
exports.getUsersByUnity = getUsersByUnity;
exports.getCountUsers = getCountUsers;
exports.getAllUnits = getAllUnits;