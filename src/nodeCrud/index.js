const { generateControllers } = require('./generateControllers')
const { generateModels } = require('./generateModels')
const { generateRoutes } = require('./generateRoutes')

let nodeCommand = 'nodecrud'
function generateNodeCrud() {
    console.log('nodeCrud: ')
    generateControllers();
    generateModels();
    generateRoutes();
}

module.exports = {
    generateNodeCrud,
    nodeCommand
};