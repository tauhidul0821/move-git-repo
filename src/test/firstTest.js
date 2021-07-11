const { create, nameAndDirFromCmd,firstCharToUpperCase } = require('../../lib');

const sampleText = `Lorem Ipsum1 is simply dummy text of the printing and typesetting industry. 

Lorem Ipsum2 has been the industry's standard dummy text ever since the 1500s, 

when an unknown printer took a galley of type and scrambled it to make a type specimen book. 

It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 

It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum3 passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum4.
`




// const { name, dir } = nameAndDirFromCmd(process.argv[3]);
// console.log('name ->', name)
// console.log('dir ->', dir)

const fileName = `ccc.service.js`;

const directory = `ccc`;

const replaceWord = `
Ipsum1=Elon Musk,
Ipsum2=Khadija,
Ipsum3=${process.argv[3]},
Ipsum4=${firstCharToUpperCase('ccc')}
`;

exports.firstTest = function() {
    create(sampleText, fileName, replaceWord, directory);
}
