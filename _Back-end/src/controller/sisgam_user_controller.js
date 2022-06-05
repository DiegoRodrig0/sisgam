const Sisgam_User = require('../model/sisgam_user_model');

async function getAllUsers(req, res) {
    try {
        const response = await Sisgam_User.getAllUsers();
        res.status(200).send(response);
    }
    catch (ex) {
        res.status(500).send({ error: ex });
    }
}

exports.getAllUsers = getAllUsers;