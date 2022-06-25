const User = require('../model/sisgam_user_model');

async function getAllUsers(req, res) {
    try {
        const response = await User.getAllUsers();
        res.status(200).send(response);
    }
    catch (ex) {
        res.status(500).send({ error: ex });
    }
}

async function insertUser(req, res) {
    if (req.body && req.body.email) {
        try {
            let email = req.body.email;
            if (email) {
                let id = await User.findIdByEmail(email);
                if (id === -1) {
                    id = await User.insertUser(email);
                }
                res.status(200).send({ id: id });
            }
            else {
                res.status(500).send({ error: 'The property email must be in the domain @emserf.com!' });
            }
        }
        catch (ex) {
            res.status(500).send({ error: ex });
        }
    }
    else {
        res.status(500).send({ error: '⚠️ Você precisa informar o email!' });
    }
}

exports.insertUser = insertUser;
exports.getAllUsers = getAllUsers;