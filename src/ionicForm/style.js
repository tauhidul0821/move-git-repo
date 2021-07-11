const { create, nameAndDirFromCmd, firstCharToUpperCase } = require('../../lib');

const sampleText = `/* css */
`

// const { name, dir } = nameAndDirFromCmd(process.argv[3]);

const fileName = `fff.css`;

const directory = `ccc`;

const replaceWord = `
`;

exports.generateStyle = function () {
    create(sampleText, fileName, replaceWord, directory);
}
