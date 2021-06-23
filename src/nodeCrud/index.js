require('colors')
const { generateControllers } = require('./generateControllers')
const { generateModels } = require('./generateModels')
const { generateRoutes } = require('./generateRoutes')

let nodeCommand = 'nodecrud'
function generateNodeCrud() {
    generateControllers();
    generateModels();
    generateRoutes();

    // console.log('Created successfuly'.green);
}

module.exports = {
    generateNodeCrud,
    nodeCommand
};