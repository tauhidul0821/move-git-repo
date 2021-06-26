const { firstTest } = require('./firstTest')
const { secondTest } = require('./secondFile')

let ionicFormCommand = 'fc' //bs g test
function generateIonicForm() {
    console.log('now ionic form component');
}

module.exports = {
    generateIonicForm,
    ionicFormCommand
};
