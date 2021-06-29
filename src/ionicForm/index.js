const { generateComponent } = require('./component')
// const { secondTest } = require('./secondFile')

let ionicFormCommand = 'fc' //bs g test
function generateIonicForm() {
    console.log('now ionic form component');
    generateComponent();
}

module.exports = {
    generateIonicForm,
    ionicFormCommand
};
