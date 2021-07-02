const { create, nameAndDirFromCmd, firstCharToUpperCase } = require('../../lib');

const sampleText = `/* css */
`

const { name, dir } = nameAndDirFromCmd(process.argv[3]);

const fileName = `${name}.css`;

const directory = `${dir}`;

const replaceWord = `
`;

module.exports.generateStyle = () => {
    create(sampleText, fileName, replaceWord, directory);
}





