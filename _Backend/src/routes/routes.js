const unityController = require('../controller/unitycontroller');

module.exports = async function (app) {

    app.route('/unity/getAllUnits').get(unityController.getAllUnits);

}
