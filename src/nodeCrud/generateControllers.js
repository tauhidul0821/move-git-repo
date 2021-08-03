const { create, nameFromCmd } = require('../../lib');

const name = nameFromCmd(process.argv[3]);

const sampleText = `Generate controllers change to Bill`

const fileName = `${name}Controllers.js`;

const replaceWord = `
Bill=Gates
`;

const directory = `nodecrud/controllers`;

exports.generateControllers = function () {
    create(sampleText, fileName, replaceWord, directory);
}
