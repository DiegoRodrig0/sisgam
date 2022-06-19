const User = require('../model/sisgam_user_model');
const Map = require('../model/sisgam_map_model');

async function bindMap(req, res) {
    if (req.body && req.body.email && req.body.sedeId) {
        try {
            let email = req.body.email;
            let sede_id = req.body.sedeId;
            if (email) {
                let receiver_id = await User.findIdByEmail(email);
                if (receiver_id === -1) {
                    receiver_id = await User.insertUsers(email);
                }

                await Map.insertUserByUnity(receiver_id, sede_id);
                res.status(200).send({msg: "✅ Email vinculado com sucesso!"});
            }
            else {
                res.status(500).send({ error: 'A propriedade email precisa estar no domínio @emserf.com' });
            }
        }
        catch (ex) {                        
            res.status(500).send({ error: "⚠️ Email já está vinculado a esta unidade!" });
        }
    }
    else {
        res.status(500).send({ error: '⚠️ Você precisa informar o email!' });        
    }
}

async function getGeneralList(req, res) {
    try {
        const response = await Map.getGeneralList();
        res.status(200).send(response);
    }
    catch (ex) {
        res.status(500).send({ error: ex });
    }
}

exports.bindMap = bindMap;
exports.getGeneralList = getGeneralList;