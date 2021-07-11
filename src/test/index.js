const { firstTest } = require('./firstTest')
const { secondTest } = require('./secondFile')

let testCommand = 'test' //bs g test
function test() {
    console.log('test: here ')
    firstTest();
    secondTest();
}

module.exports = {
    test,
    testCommand
};
