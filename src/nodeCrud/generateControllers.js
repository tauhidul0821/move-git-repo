const { create } = require('../../lib');

const sampleText = `Generate controllers change to Bill`

const fileName = `coursesControllers.js`;

const replaceWord = `
Bill=Gates
`;

const directory = `nodecrud/controllers`;

module.exports.generateControllers = () => {
    create(sampleText, fileName, replaceWord, directory);
}

