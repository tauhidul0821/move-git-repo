const { create, nameAndDirFromCmd,firstCharToUpperCase } = require('../../lib');

const sampleText = `

`




const { name, dir } = nameAndDirFromCmd(process.argv[3]);
// console.log('name ->', name)
// console.log('dir ->', dir)

const fileName = `${name}.css`;

const directory = `${dir}`;

const replaceWord = `
Ipsum1=${process.argv[2]},
Ipsum2=Khadija,
Ipsum3=${process.argv[3]},
Ipsum4=${firstCharToUpperCase(name)}
`;

module.exports.generateStyle = () => {
    create(sampleText, fileName, replaceWord, directory);
}





