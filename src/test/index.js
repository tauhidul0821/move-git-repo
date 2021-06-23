require('colors')
const { firstTest } = require('./firstTest')
const { secondTest } = require('./secondFile')

let testCommand = 'test' //bs g test
async function test() {
    await firstTest();
    await secondTest();
    
    // console.log('Created successfuly'.green);
}

module.exports = {
    test,
    testCommand
};
