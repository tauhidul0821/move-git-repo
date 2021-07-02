const { generateComponent } = require('./component')
const { generateStyle } = require('./style');
const { generateTemplate } = require('./template');

let ionicFormCommand = 'fc' //bs g fc
function generateIonicForm() {
    generateComponent();
    generateTemplate();
    generateStyle();

}

module.exports = {
    generateIonicForm,
    ionicFormCommand
};
