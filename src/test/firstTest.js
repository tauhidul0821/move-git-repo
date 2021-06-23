const { create } = require('../../lib');

const sampleText = `Lorem Ipsum1 is simply dummy text of the printing and typesetting industry. 

Lorem Ipsum2 has been the industry's standard dummy text ever since the 1500s, 

when an unknown printer took a galley of type and scrambled it to make a type specimen book. 

It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 

It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum3 passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum4.
`

const fileName = `firstTest.txt`;

const replaceWord = `
Ipsum1=${process.argv[2]},
Ipsum2=Khadija,
Ipsum3=${process.argv[3]},
Ipsum4=Mamun
`;

const directory = `Components4/Fine`;

module.exports.firstTest = () => {
    create(sampleText, fileName, replaceWord, directory);
}

