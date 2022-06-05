const Sisgam_Unity_Controller = require('../controller/sisgam_unity_controller');
const Sisgam_User_Controller = require('../controller/sisgam_user_controller');
const Sisgam_Map_Controller = require('../controller/sisgam_map_controller');

module.exports = async function (app) {
    app.route('/sisgam_unity/getAllUnits').get(Sisgam_Unity_Controller.getAllUnits);
    app.route('/sisgam_user/getAllUsers').get(Sisgam_User_Controller.getAllUsers);
    // app.route('/sedes/getUsersByUnity').post(Sisgam_Map_Controller.getUsersByUnity);
}
