const { firstTest } = require('./firstTest')
const { secondTest } = require('./secondFile')

let testCommand = 'test' //bs g test
function test() {
    firstTest();
    secondTest();
}

module.exports = {
    test,
    testCommand
};
