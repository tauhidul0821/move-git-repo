const { create } = require('../../lib');

const sampleText = `Generate controllers change to khadi`

const fileName = `coursesControllers.js`;

const replaceWord = ``;

const directory = `nodecrud/controllers`;

module.exports.generateControllers = () => {
    create(sampleText, fileName, replaceWord, directory);
}

