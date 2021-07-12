const { create, nameFromCmd, directoryFromCmd } = require('../../lib');
const name = nameFromCmd(process.argv[3]);
const dir = directoryFromCmd(process.argv[3]);

const sampleText = `/* css */
`

const fileName = `${name}.css`;

const directory = `${dir}`;

const replaceWord = `
`;

exports.generateStyle = function () {
    create(sampleText, fileName, replaceWord, directory);
}
