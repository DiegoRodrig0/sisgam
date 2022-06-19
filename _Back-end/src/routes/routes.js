const Sisgam_Unity_Controller = require('../controller/sisgam_unity_controller');
const Sisgam_User_Controller = require('../controller/sisgam_user_controller');
const Sisgam_Map_Controller = require('../controller/sisgam_map_controller');

module.exports = async function (app) {
    //================================== UNITY ROUTES ==============================================
    app.route('/sisgam_unity/deleteUsersByUnity').post(Sisgam_Unity_Controller.deleteUsersByUnity);
    app.route('/sisgam_unity/insertUserByUnity').post(Sisgam_Unity_Controller.insertUserByUnity);
    app.route('/sisgam_unity/getUsersByUnity').post(Sisgam_Unity_Controller.getUsersByUnity);
    app.route('/sisgam_unity/getUnityDetails').post(Sisgam_Unity_Controller.getUnityDetails);
    app.route('/sisgam_unity/getUserDetails').post(Sisgam_Unity_Controller.getUserDetails);
    app.route('/sisgam_unity/getCountUsers').get(Sisgam_Unity_Controller.getCountUsers);
    app.route('/sisgam_unity/getAllUnits').get(Sisgam_Unity_Controller.getAllUnits);

    //================================== USER ROUTES ====================================
    app.route('/sisgam_user/insertUsers').post(Sisgam_User_Controller.insertUser);
    app.route('/sisgam_user/getAllUsers').get(Sisgam_User_Controller.getAllUsers);
    app.route('/sisgam_user/bindMap').post(Sisgam_Map_Controller.bindMap);

    //================================== MAP ROUTES =================================   
    app.route('/sisgam_map/getGeneralList').get(Sisgam_Map_Controller.getGeneralList);
}
