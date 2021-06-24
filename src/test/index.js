require('colors')
const { firstTest } = require('./firstTest')
const { secondTest } = require('./secondFile')

let testCommand = 'test' //bs g test
function test() {
    firstTest();
    secondTest();
    
    // console.log('Created successfuly'.green);
}

module.exports = {
    test,
    testCommand
};
